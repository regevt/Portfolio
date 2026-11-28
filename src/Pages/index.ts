import { FC } from "react";
import { Deck, Data as DeckData } from "./Deck/Deck";
import { Planters, Data as plantersData } from "./Planters/Planters";
import { Platform, Data as platformData } from "./Platform/Platform";
import { Stargate, Data as stargateData } from "./Stargate/Stargate";
import { Computer6502, Data as computer6502Data } from "./Computer6502/Computer6502";
import { EightBit, Data as eightBitData } from "./EightBit/EightBit";
import { Cnc, Data as cncData } from "./Cnc/Cnc";
import { Metronome, Data as metronomeData } from "./Metronome/Metronome";
import { HexLights, Data as hexLightsData } from "./HexLights/HexLights";
import { Project } from "../types/types";

export interface PageType {
    Page: FC,
    data: Project
}


export const Pages = [
    { Page: Deck, data: DeckData },
    { Page: Planters, data: plantersData },
    { Page: Stargate, data: stargateData },
    { Page: Platform, data: platformData },
    { Page: Computer6502, data: computer6502Data },
    { Page: EightBit, data: eightBitData },
    { Page: Cnc, data: cncData },
    { Page: Metronome, data: metronomeData },
    { Page: HexLights, data: hexLightsData }
] as PageType[]
