import { StructureBuilder } from "sanity/structure";
import { seo, collection, homepage } from "./custom-link-item";

export const customStructure = (S: StructureBuilder) => {
  return S.list()
    .title("Dashboard")
    .items([seo(S), collection(S), homepage(S)]);
};
