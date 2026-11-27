import { useEffect, useState } from "react";

const QUERY = "(prefers-color-scheme: light)";

export function usePrefersDark() {
    const [prefersDark, setPrefersDark] = useState(true);

    useEffect(() => {
        const mql = window.matchMedia(QUERY);

        const onChange = () => {
            setPrefersDark(!mql.matches);
        };

        mql.addEventListener("change", onChange);

        setPrefersDark(!mql.matches);

        return () => {
            mql.removeEventListener("change", onChange);
        };
    }, []);

    return prefersDark;
}
