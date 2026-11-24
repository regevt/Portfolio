import { FC } from "react";
import { Deck, Data as DeckData } from "./deck";
import { Planter1, Data as planterData } from "./planters";
import { Platform, Data as platformData } from "./platform";
import { Stargate, Data as stargateData } from "./stargate";
import { Project } from "../types/types";

export interface PageType {
    Page: FC,
    data: Project
}


export const Pages = [
    { Page: Deck, data: DeckData },
    { Page: Planter1, data: planterData },
    { Page: Stargate, data: stargateData },
    { Page: Platform, data: platformData }
] as PageType[]