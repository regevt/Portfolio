const MOVIE = "https://www.imdb.com/title/tt0111282/";
const SHOW = "https://www.imdb.com/title/tt0118480";
const PROJECT = "https://thestargateproject.com/";
const ASSEMBLY = "https://www.youtube.com/watch?v=ElTCFurf5us";

const en = {
    card: {
        title: "Stargate",
        description: "The Stargate Project's printable gate, with a dial home device that lights up.",
        specs: [
            { label: "Build", value: "3D printed" },
            { label: "Electronics", value: "PCBWay PCB" },
            { label: "Finish", value: "Dry-brushed base" },
        ],
    },
    title: "3D printed Stargate",
    intro: `For as long as I can remember, I've been a fan of the movie [Stargate (1994)](${MOVIE}) and later the TV show [Stargate SG-1 (1997)](${SHOW}), so when Kristian from [The Stargate Project](${PROJECT}) released his 3D-printable "working" Stargate, **I just had to make it**.`,
    finishedAlt: "The finished Stargate",
    printing: `Printing the gate took several days, and at the end I had a pile of dozens of parts. Putting everything together was a breeze thanks to Kristian's [assembly video](${ASSEMBLY}), and soon I had a working gate.`,
    videoTitle: "YouTube video player",
    dhd: "Along with the gate comes the DHD (dial home device). I ordered its PCB from PCBWay, because I don't have the skill or equipment to solder SMD parts.",
    dhdAlt: "The dial home device",
    painting: [
        "After all the printing and electronics, there was only one thing left to do: paint the gate.",
        "I painted the platform to look like rock, using base coats and dry brushing. I chose not to paint the gate itself, because I don't trust my abilities to do it justice.",
        "When I put it in the display cabinet, the stairs stuck out too far, so I modified one of the walls and printed a \"plug\" to fill the hole where the stairs had been.",
    ].join("\n\n"),
    displayAlt: "The Stargate in the display cabinet",
};

const nl: typeof en = {
    card: {
        title: "Stargate",
        description: "De printbare gate van The Stargate Project, met een dial home device dat oplicht.",
        specs: [
            { label: "Bouw", value: "3D-geprint" },
            { label: "Elektronica", value: "PCBWay PCB" },
            { label: "Afwerking", value: "Drybrushed voetstuk" },
        ],
    },
    title: "3D-geprinte Stargate",
    intro: `Zolang ik me kan herinneren ben ik fan van de film [Stargate (1994)](${MOVIE}) en daarna van de tv-serie [Stargate SG-1 (1997)](${SHOW}). Dus toen Kristian van [The Stargate Project](${PROJECT}) zijn 3D-printbare "werkende" Stargate uitbracht, **moest ik hem gewoon maken**.`,
    finishedAlt: "De afgewerkte Stargate",
    printing: `Het printen van de gate duurde meerdere dagen, en uiteindelijk had ik een stapel van tientallen onderdelen. Alles in elkaar zetten ging heel makkelijk dankzij Kristians [montagevideo](${ASSEMBLY}), en zo had ik een werkende gate.`,
    videoTitle: "YouTube-videospeler",
    dhd: "Bij de gate hoort de DHD (dial home device). De printplaat daarvoor bestelde ik bij PCBWay, omdat ik niet de vaardigheid of het gereedschap heb om SMD-onderdelen te solderen.",
    dhdAlt: "Het dial home device",
    painting: [
        "Na al het printen en de elektronica bleef er nog één ding over: de gate verven.",
        "Het voetstuk schilderde ik als rotsen, met grondlagen en drybrushing. De gate zelf heb ik niet geverfd, omdat ik niet genoeg vertrouwen had dat ik hem recht zou doen.",
        "Toen ik hem in de vitrinekast zette, staken de trappen te ver uit. Daarom paste ik een van de wanden aan en printte ik een \"plug\" om het gat te dichten waar de trappen hadden gezeten.",
    ].join("\n\n"),
    displayAlt: "De Stargate in de vitrinekast",
};

export const strings = { en, nl };
