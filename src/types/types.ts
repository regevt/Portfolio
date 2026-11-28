export interface Spec {
    label: string;
    value: string;
    labelNL?: string;
    valueNL?: string;
}

export interface Project {
    id: number;
    titleEN: string;
    titleNL: string;
    descriptionEN: string;
    descriptionNL: string;
    projectName: string;
    image: string;
    category: string;
    specs?: Spec[];
}

export enum lang {
    EN,
    NL
}

export type Theme = "system" | "light" | "dark";
