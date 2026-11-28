const en = {
    card: {
        title: "Metronome",
        description: "A desk metronome with a sweep of LEDs and a BPM display.",
        specs: [
            { label: "Display", value: "OLED" },
            { label: "Beat", value: "8 LEDs" },
            { label: "Case", value: "3D printed" },
        ],
    },
    title: "Metronome",
    paragraphs: [
        "[Placeholder: who the metronome is for, and how it works.]",
        "[Placeholder: designing the case, and the electronics inside it.]",
    ],
    animationAlt: "The metronome running",
    finishedAlt: "The finished metronome",
    caseFrontAlt: "Design of the metronome case, front",
    caseBackAlt: "Design of the metronome case, back",
};

const nl: typeof en = {
    card: {
        title: "Metronoom",
        description: "Een bureaumetronoom met een lichtzwaai van leds en een BPM-display.",
        specs: [
            { label: "Scherm", value: "OLED" },
            { label: "Tel", value: "8 leds" },
            { label: "Behuizing", value: "3D-geprint" },
        ],
    },
    title: "Metronoom",
    paragraphs: [
        "[Placeholder: voor wie de metronoom is, en hoe hij werkt.]",
        "[Placeholder: het ontwerpen van de behuizing, en de elektronica erin.]",
    ],
    animationAlt: "De metronoom in werking",
    finishedAlt: "De afgewerkte metronoom",
    caseFrontAlt: "Ontwerp van de metronoombehuizing, voorkant",
    caseBackAlt: "Ontwerp van de metronoombehuizing, achterkant",
};

export const strings = { en, nl };
