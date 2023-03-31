import { createMemo, createSignal, For, Setter, Show, untrack } from 'solid-js';
import { SetStoreFunction } from 'solid-js/store';
import { msToDayNum, formatDayNum, createLocalStore, removeIndex } from './utils';

interface Habit {
  label: string;
  history: { [date: number]: boolean | undefined };
};

function App() {
  const [habits, setHabits] = createLocalStore<Habit[]>('habits', []);
  const [numDays, setNumDays] = createSignal(5);

  const dates = createMemo(() => {
    const today = msToDayNum(Date.now())
    const d = [];
    for (let i = today - numDays() + 1; i <= today; i++) {
      d.push(i);
    }
    return d;
  });

  const [deleteModal, setDeleteModal] = createSignal<{ i: number, label: string } | undefined>(undefined);
  
  function addHabit() {
    setHabits((habits) => [...habits, { label: 'New habit', history: {} } ]);
  }

  function deleteHabit(i: number) {
    setHabits((habits: Habit[]) => removeIndex(habits, i));
  }

  return <>
    <Show when={deleteModal()}>
      <ConfirmDelete
        i={deleteModal()!.i}
        label={deleteModal()!.label}
        setDeleteModal={setDeleteModal}
        deleteHabit={deleteHabit}
      />
    </Show>
    <main class="container">
      <article>
        <figure>
          <table role="grid">
            <thead>
              <tr>
                <th></th>
                <For each={dates()}>{(date) => <th>{formatDayNum(date)}</th>}</For>
              </tr>
            </thead>
            <tbody>
              <For each={habits}>
                {(habit, i) =>
                  <Habit
                    habit={habit}
                    setHabits={setHabits}
                    i={i()}
                    dates={dates()}
                    setDeleteModal={setDeleteModal}
                  />
                }
              </For>
              <tr><td onClick={addHabit}>+</td></tr>
            </tbody>
          </table>
        </figure>
        <label>Days: {numDays()}
          <input
            type="range"
            min="1"
            max="30"
            value={numDays()}
            onInput={(e) => setNumDays(parseInt(e.currentTarget.value))}
          />
        </label>
      </article>
    </main>
  </>
};

type HabitProps = {
  habit: Habit;
  setHabits: SetStoreFunction<Habit[]>;
  i: number;
  dates: number[];
  setDeleteModal: Setter<{ i: number; label: string } | undefined>;
}

function Habit(props: HabitProps) {
  function updateLabel(newLabel: string, i: number) {
    props.setHabits(i, 'label', newLabel);
  }

  function toggleChecked(date: number, i: number) {
    props.setHabits(i, 'history', date, (date in props.habit.history) ? undefined : true );
  }
  
  return <tr>
    <td
      contentEditable={true}
      onInput={(e) => updateLabel(e.currentTarget.textContent || "", props.i)}
      onContextMenu={(e) => {
        e.preventDefault();
        props.setDeleteModal({ show: true, i: props.i, label: props.habit.label })
      }}
    >
      {untrack(() => props.habit.label)}
    </td>
    <For each={props.dates}>{(date) =>
      <td onClick={() => toggleChecked(date, props.i)}>
        {date in props.habit.history ? "✓" : ""}
      </td>
    }</For>
  </tr>;
}

type ConfirmDeleteProps = {
  i: number;
  label: string;
  setDeleteModal: Setter<{ i: number; label: string } | undefined>;
  deleteHabit: (i: number) => void;
};

function ConfirmDelete(props: ConfirmDeleteProps) {
  return <dialog open>
    <article>
      <h3>Confirm deleting <b>{props.label}</b>.</h3>
      <p>Are you sure you want to delete this habit? Deleting a habit is permanent and you will lose all the tracking data.</p>
      <footer>
        <a href="#"
          role="button"
          class="secondary"
          onClick={() => {
            props.setDeleteModal(undefined);
          }}
        >
          Cancel
        </a>
        <a href="#"
          role="button"
          onClick={() => {
            props.deleteHabit(props.i);
            props.setDeleteModal(undefined);
          }}
        >
          Delete
        </a>
      </footer>
    </article>
  </dialog>
}

export default App;
