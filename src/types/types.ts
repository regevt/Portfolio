export interface Project {
    id: number;
    titleEN: string;
    titleNL: string;
    descriptionEN: string;
    descriptionNL: string;
    projectName: string;
    images: string[];
}

export enum lang {
    EN,
    NL
}