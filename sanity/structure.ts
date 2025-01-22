// structure.ts
// import type { StructureResolver } from "sanity/structure";
import { StructureResolver } from "sanity/desk";

export const structure: StructureResolver = (S) =>
  S.list().title("Content").items(S.documentTypeListItems());
