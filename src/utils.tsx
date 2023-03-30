import { createEffect } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";

export function formatDayNum(d: number): string {
  const msInDay = 1000 * 60 * 60 * 24;
  const date = new Date(d * msInDay);
  const parts = date.toString().split(' ');
  return `${parts[0]} ${parts[2]}`;
}

export function msToDayNum(ms: number): number {
  const msInDay = 1000 * 60 * 60 * 24;
  return Math.floor(ms / msInDay) + 1;
}

export function dateStringToDayNum(s: string): number {
  return msToDayNum(Date.parse(s));
}

export function createLocalStore<T extends object>(
  name: string,
  init: T
): [Store<T>, SetStoreFunction<T>] {
  const localState = localStorage.getItem(name);
  const [state, setState] = createStore<T>(
    localState ? JSON.parse(localState) : init
  );
  createEffect(() => localStorage.setItem(name, JSON.stringify(state)));
  return [state, setState];
}

export function removeIndex<T>(array: readonly T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
