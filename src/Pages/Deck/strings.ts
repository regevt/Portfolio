const AZOBE_EN = "https://en.wikipedia.org/wiki/Lophira_alata";
const BANKIRAI_EN = "https://en.wikipedia.org/wiki/Shorea#:~:text=Shorea%20fossils%20%28linked%20with%20the%20modern%20sal%2C,and%20selected%20species%20*%20Shorea%20robusta%20C.F.Gaertn.";

const en = {
    card: {
        title: "Deck",
        description: "A new balcony deck to replace one that had rotted through.",
        specs: [
            { label: "Size", value: "4.2 × 2.3 m" },
            { label: "Frame", value: "Azobe" },
            { label: "Slats", value: "Bankirai" },
        ],
    },
    title: "Deck (balcony extension)",
    paragraphs: [
        "After moving into my new house, it was obvious that the deck would need to be replaced. The old one was completely rotten and beyond saving.",
        `The woods I chose for the project are **[Azobe](${AZOBE_EN})** for the supporting structure and **[Bankirai](${BANKIRAI_EN})** for the slats. I went for those woods because, according to my research, they are good for outdoor use and fairly weather resistant. With good care they should last for many years.`,
        "Not knowing what I was doing, I decided to err on the side of caution and doubled all the struts. In retrospect, probably overkill.",
    ],
};

const nl: typeof en = {
    card: {
        title: "Terras",
        description: "Een nieuw balkonterras ter vervanging van het oude, dat helemaal verrot was.",
        specs: [
            { label: "Afmeting", value: "4,2 × 2,3 m" },
            { label: "Frame", value: "Azobe" },
            { label: "Planken", value: "Bankirai" },
        ],
    },
    title: "Terras (balkonuitbouw)",
    paragraphs: [
        "Toen ik in mijn nieuwe huis trok, was meteen duidelijk dat het terras vervangen moest worden: het oude was helemaal verrot en niet meer te redden.",
        "Voor de draagconstructie koos ik **[azobé](https://nl.wikipedia.org/wiki/Azobé)** en voor de planken **[bankirai](https://nl.wikipedia.org/wiki/Bangkirai)**. Volgens mijn onderzoek zijn beide houtsoorten geschikt voor buiten en redelijk weerbestendig. Met goed onderhoud moeten ze vele jaren meegaan.",
        "Omdat ik niet precies wist wat ik deed, nam ik het zekere voor het onzekere en verdubbelde ik alle balken. Achteraf gezien waarschijnlijk overdreven.",
    ],
};

export const strings = { en, nl };
