import { useCallback, useContext } from "react";
import { PortfolioContext } from "../Context/Store";
import { strings, StringKey } from "../i18n/strings";
import { lang } from "../types/types";

export function useLocale() {
    const { state } = useContext(PortfolioContext);
    const current = state.lang;

    /** Interface text by key. `{name}` placeholders are filled from `vars`. */
    const t = useCallback((key: StringKey, vars?: Record<string, string | number>) => {
        const text = strings[current][key] ?? strings[lang.EN][key] ?? key;
        if (!vars) return text;
        return text.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? `{${name}}`));
    }, [current]);

    /** Choose between inline English and Dutch content. */
    const pick = useCallback(<T,>(en: T, nl: T): T => (current === lang.NL ? nl : en), [current]);

    /** Category label. Unknown categories are shown as they are. */
    const category = useCallback((name: string) => {
        const key = `category.${name}` as StringKey;
        return strings[current][key] ?? name;
    }, [current]);

    return { lang: current, t, pick, category };
}
