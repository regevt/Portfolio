import { Project } from "../types/types";

/** The text a project's card and spec list need, in one language. */
export interface CardStrings {
    title: string;
    description: string;
    specs: { label: string; value: string }[];
}

type ProjectBase = Pick<Project, "id" | "projectName" | "image" | "category">;

/** Builds a project's data from its fixed fields and its English and Dutch card text. */
export const projectData = (base: ProjectBase, en: CardStrings, nl: CardStrings): Project => ({
    ...base,
    titleEN: en.title,
    titleNL: nl.title,
    descriptionEN: en.description,
    descriptionNL: nl.description,
    specs: en.specs.map((spec, i) => ({
        ...spec,
        labelNL: nl.specs[i]?.label,
        valueNL: nl.specs[i]?.value,
    })),
});
