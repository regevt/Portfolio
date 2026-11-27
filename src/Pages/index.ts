import { FC } from "react";
import { Deck, Data as DeckData } from "./deck";
import { Planter1, Data as planterData } from "./planters";
import { Platform, Data as platformData } from "./platform";
import { Stargate, Data as stargateData } from "./stargate";
import { Computer6502, Data as computer6502Data } from "./computer6502";
import { EightBit, Data as eightBitData } from "./eightBit";
import { Cnc, Data as cncData } from "./cnc";
import { Metronome, Data as metronomeData } from "./metronome";
import { HexLights, Data as hexLightsData } from "./hexLights";
import { Project } from "../types/types";

export interface PageType {
    Page: FC,
    data: Project
}


export const Pages = [
    { Page: Deck, data: DeckData },
    { Page: Planter1, data: planterData },
    { Page: Stargate, data: stargateData },
    { Page: Platform, data: platformData },
    { Page: Computer6502, data: computer6502Data },
    { Page: EightBit, data: eightBitData },
    { Page: Cnc, data: cncData },
    { Page: Metronome, data: metronomeData },
    { Page: HexLights, data: hexLightsData }
] as PageType[]
