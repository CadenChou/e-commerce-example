import { atom, useAtom } from "jotai";
import { Item, ItemDict } from "./types";

export const itemsAtom = atom<ItemDict>({});

export const categoryAtom = atom<string>("Suits");
