import { createContext, useReducer, PropsWithChildren, ActionDispatch, useEffect } from 'react';
import { lang } from "../types/types";

export interface PortfolioState {
    lang: lang;
}

export interface PortfolioAction {
    payload: Partial<PortfolioState>;
    type: "set"
}

export const PortfolioContext = createContext<{
    state: PortfolioState,
    dispatch?: ActionDispatch<[action: PortfolioAction]>
}
>({ state: { lang: lang.EN, } });

export const PortfolioProvider = ({ children }: PropsWithChildren) => {
    const [portfolio, dispatch] = useReducer(
        portfolioReducer,
        { lang: lang.EN, }
    );

    useEffect(() => {
        dispatch?.({
            type: "set", payload: {
                lang: lang.EN,
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