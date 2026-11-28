const en = {
    card: {
        title: "6502 computer",
        description: "A 6502 computer on breadboards, with an LCD and a serial port.",
        specs: [
            { label: "CPU", value: "6502" },
            { label: "Display", value: "16×2 LCD" },
            { label: "I/O", value: "DB9 serial" },
        ],
    },
    title: "6502 computer",
    paragraphs: [
        "[Placeholder: why you built a 6502 computer, and what you followed or designed yourself.]",
        "[Placeholder: how the build went, what broke, and what you would do differently.]",
    ],
    firstBreadboardAlt: "The first 6502 breadboard",
    computerAlt: "The 6502 computer with LCD and serial port",
};

const nl: typeof en = {
    card: {
        title: "6502-computer",
        description: "Een 6502-computer op breadboards, met een lcd-scherm en een seriële poort.",
        specs: [
            { label: "CPU", value: "6502" },
            { label: "Scherm", value: "16×2 lcd" },
            { label: "I/O", value: "DB9 serieel" },
        ],
    },
    title: "6502-computer",
    paragraphs: [
        "[Placeholder: waarom je een 6502-computer bouwde, en wat je volgde of zelf ontwierp.]",
        "[Placeholder: hoe het bouwen ging, wat er kapotging, en wat je anders zou doen.]",
    ],
    firstBreadboardAlt: "Het eerste 6502-breadboard",
    computerAlt: "De 6502-computer met lcd-scherm en seriële poort",
};

export const strings = { en, nl };
