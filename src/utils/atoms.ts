import { atom, useAtom } from "jotai";
import { Item, ItemDict } from "./types";

/**
 * Atoms are used for global state management
 */

export const itemsAtom = atom<ItemDict>({});

export const categoryAtom = atom<string>("smartphones");

export const categoriesAtom = atom<string[]>([]);

export const isLoadingAtom = atom<boolean>(true);
