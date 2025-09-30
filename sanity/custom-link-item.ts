import { StructureBuilder } from "sanity/structure";
import { PackageIcon } from "@sanity/icons";
import { SchemaType } from "sanity";

const submenu = (
  S: StructureBuilder,
  id: string,
  listTitle: string,
  idChild: string,
  schemaType: string | SchemaType
) => {
  return S.listItem()
    .id(id)
    .schemaType(schemaType)
    .title(listTitle)
    .child(S.editor().id(idChild).schemaType(schemaType).documentId(idChild));
};

const submenuWithTemplate = (
  S: StructureBuilder,
  itemTitle: string,
  listTitle: string,
  linkType: string,
  schemaType: string
) => {
  return S.listItem()
    .title(itemTitle)
    .child(S.documentTypeList(schemaType).title(listTitle));
};

export const seo = (S: StructureBuilder) => {
  return S.listItem()
    .id("seo")
    .schemaType("SEO")
    .title("SEO")
    .child(S.editor().id("seo").schemaType("SEO").documentId("seo"));
};

export const collection = (S: StructureBuilder) => {
  return S.listItem()
    .icon(PackageIcon)
    .title("Collection")
    .child(
      S.list()
        .title("Collections")
        .items([
          submenuWithTemplate(S, "Skill", "Skills", "skill", "skillCollection"),
          submenuWithTemplate(
            S,
            "Project",
            "Projects",
            "project",
            "projectCollection"
          ),
          submenuWithTemplate(
            S,
            "Social Media",
            "Social Media",
            "socialMedias",
            "socialMediaCollection"
          ),
        ])
    );
};

export const homepage = (S: StructureBuilder) => {
  return S.listItem()
    .icon(PackageIcon)
    .title("Homepage")
    .child(
      S.list()
        .title("Section")
        .items([
          submenu(S, "homeSection", "Home", "home", "home"),
          submenu(S, "skillSection", "Skill", "skill", "skill"),
          submenu(S, "projectSection", "Project", "project", "project"),
          submenu(S, "contactSection", "Contact", "contact", "contact"),
        ])
    );
};
