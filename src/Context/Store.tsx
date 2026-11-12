import { createContext, useReducer, PropsWithChildren, ActionDispatch, useEffect } from 'react';
import { lang, Project } from "../types/types";
import db from "./projects.json"

export interface PortfolioState {
    lang: lang;
    projects: Project[];
}

export interface PortfolioAction {
    payload: Partial<PortfolioState>;
    type: "set"
}

export const PortfolioContext = createContext<{
    state: PortfolioState,
    dispatch?: ActionDispatch<[action: PortfolioAction]>
}
>({ state: { lang: lang.EN, projects: [] } });

export const PortfolioProvider = ({ children }: PropsWithChildren) => {
    const [portfolio, dispatch] = useReducer(
        portfolioReducer,
        { lang: lang.EN, projects: [] }
    );

    useEffect(() => {
        dispatch?.({
            type: "set", payload: {
                lang: lang.EN,
                projects: db.projects as Project[]
            }
        })
    }, [])

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