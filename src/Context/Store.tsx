import { createContext, useReducer, PropsWithChildren, ActionDispatch, useEffect } from 'react';
import { lang, Theme } from "../types/types";

const THEME_KEY = "theme";
const LANG_KEY = "lang";

export interface PortfolioState {
    lang: lang;
    theme: Theme;
}

export interface PortfolioAction {
    payload: Partial<PortfolioState>;
    type: "set"
}

const readStoredTheme = (): Theme => {
    try {
        const stored = window.localStorage.getItem(THEME_KEY);
        if (stored === "light" || stored === "dark") return stored;
    } catch {
        // Storage can be blocked. Follow the system theme then.
    }
    return "system";
}

const readStoredLang = (): lang => {
    try {
        const stored = window.localStorage.getItem(LANG_KEY);
        if (stored === "nl") return lang.NL;
        if (stored === "en") return lang.EN;
    } catch {
        // Storage can be blocked. Fall back to the browser language then.
    }
    const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
    return preferred.some(l => l?.toLowerCase().startsWith("nl")) ? lang.NL : lang.EN;
}

export const PortfolioContext = createContext<{
    state: PortfolioState,
    dispatch?: ActionDispatch<[action: PortfolioAction]>
}
>({ state: { lang: lang.EN, theme: "system" } });

export const PortfolioProvider = ({ children }: PropsWithChildren) => {
    const [portfolio, dispatch] = useReducer(
        portfolioReducer,
        { lang: lang.EN, theme: "system" },
        (initial) => ({ ...initial, lang: readStoredLang(), theme: readStoredTheme() })
    );

    useEffect(() => {
        const code = portfolio.lang === lang.NL ? "nl" : "en";
        document.documentElement.lang = code;
        try {
            window.localStorage.setItem(LANG_KEY, code);
        } catch {
            // Storage can be blocked. The language then lasts for this visit only.
        }
    }, [portfolio.lang])

    useEffect(() => {
        const root = document.documentElement;
        if (portfolio.theme === "system") {
            root.removeAttribute("data-theme");
        } else {
            root.setAttribute("data-theme", portfolio.theme);
        }
        try {
            if (portfolio.theme === "system") {
                window.localStorage.removeItem(THEME_KEY);
            } else {
                window.localStorage.setItem(THEME_KEY, portfolio.theme);
            }
        } catch {
            // Storage can be blocked. The theme then lasts for this visit only.
        }
    }, [portfolio.theme])

    return (
        <PortfolioContext value={{ state: portfolio, dispatch: dispatch }} >
            {children}
        </PortfolioContext>
    );
}

const portfolioReducer = (state: PortfolioState, action: PortfolioAction) => {
    switch (action.type) {
        case 'set': {
            return { ...state, ...action.payload };
        }
    }
}
