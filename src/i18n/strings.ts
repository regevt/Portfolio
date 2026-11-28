import { lang } from "../types/types";

const en = {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.main": "Main",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "lang.switch": "Nederlands",

    "home.eyebrow": "Workshop log · {count} builds",
    "home.title": "I build things from wood, filament and solder.",
    "home.lede": "Software developer by day. These are the weekend projects: what I made, what I used, and what I would do differently next time.",
    "home.filter": "Filter projects",
    "home.about": "About",
    "home.about1": "I'm Regev Tal-Snijder, a software developer, hobbyist woodworker and tinkerer. I started with a rotten balcony deck and kept going: planters, a dog bowl stand, breadboard computers and anything a 3D printer can make.",
    "home.about2": "Most of these are first attempts. Each page says what went wrong as well as what worked.",
    "home.elsewhere": "Elsewhere",

    "category.All": "All",
    "category.Woodworking": "Woodworking",
    "category.Electronics": "Electronics",
    "category.3D printing": "3D printing",
    "category.CNC": "CNC",

    "project.back": "← All projects",
    "project.more": "More projects",
    "project.previous": "← Previous",
    "project.next": "Next →",
    "lightbox.expanded": "Expanded view",
    "lightbox.previous": "Previous photo",
    "lightbox.next": "Next photo",
};

export type StringKey = keyof typeof en;

const nl: Record<StringKey, string> = {
    "nav.projects": "Projecten",
    "nav.about": "Over mij",
    "nav.contact": "Contact",
    "nav.main": "Hoofdmenu",
    "menu.open": "Menu openen",
    "menu.close": "Menu sluiten",
    "theme.toLight": "Licht thema gebruiken",
    "theme.toDark": "Donker thema gebruiken",
    "lang.switch": "English",

    "home.eyebrow": "Werkplaatslogboek · {count} projecten",
    "home.title": "Ik maak dingen van hout, filament en soldeer.",
    "home.lede": "Overdag softwareontwikkelaar. Dit zijn de weekendprojecten: wat ik maakte, wat ik gebruikte en wat ik de volgende keer anders zou doen.",
    "home.filter": "Projecten filteren",
    "home.about": "Over mij",
    "home.about1": "Ik ben Regev Tal-Snijder: softwareontwikkelaar, hobbyhoutbewerker en knutselaar. Het begon met een verrot balkonterras en daarna ben ik doorgegaan: plantenbakken, een voerstandaard voor de honden, breadboardcomputers en alles wat een 3D-printer kan maken.",
    "home.about2": "De meeste zijn eerste pogingen. Op elke pagina staat wat er misging en wat wel werkte.",
    "home.elsewhere": "Elders",

    "category.All": "Alles",
    "category.Woodworking": "Houtbewerking",
    "category.Electronics": "Elektronica",
    "category.3D printing": "3D-printen",
    "category.CNC": "CNC",

    "project.back": "← Alle projecten",
    "project.more": "Meer projecten",
    "project.previous": "← Vorige",
    "project.next": "Volgende →",
    "lightbox.expanded": "Vergrote weergave",
    "lightbox.previous": "Vorige foto",
    "lightbox.next": "Volgende foto",
};

export const strings: Record<lang, Record<StringKey, string>> = {
    [lang.EN]: en,
    [lang.NL]: nl,
};
