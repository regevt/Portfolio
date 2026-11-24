export interface Project {
    id: number;
    titleEN: string;
    titleNL: string;
    descriptionEN: string;
    descriptionNL: string;
    projectName: string;
    image: string;
}

export enum lang {
    EN,
    NL
}