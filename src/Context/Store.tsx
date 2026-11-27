import { createContext, useReducer, PropsWithChildren, ActionDispatch, useEffect } from 'react';
import { lang, Theme } from "../types/types";

const THEME_KEY = "theme";

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

export const PortfolioContext = createContext<{
    state: PortfolioState,
    dispatch?: ActionDispatch<[action: PortfolioAction]>
}
>({ state: { lang: lang.EN, theme: "system" } });

export const PortfolioProvider = ({ children }: PropsWithChildren) => {
    const [portfolio, dispatch] = useReducer(
        portfolioReducer,
        { lang: lang.EN, theme: "system" },
        (initial) => ({ ...initial, theme: readStoredTheme() })
    );

    useEffect(() => {
        dispatch?.({
            type: "set", payload: {
                lang: lang.EN,
            }
        })
    }, [])

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
