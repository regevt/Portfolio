import { FC, useContext, useEffect, useState } from "react";
import "./MenuBar.css";
import { Link, useLocation } from "react-router-dom";
import { PortfolioContext } from "../../Context/Store";
import { usePrefersDark } from "../../hooks/usePrefersDark";

const SunIcon: FC = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
);

const MoonIcon: FC = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
);

const MenuIcon: FC<{ open: boolean }> = ({ open }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
);

export const MenuBar: FC = () => {
    const { state, dispatch } = useContext(PortfolioContext);
    const prefersDark = usePrefersDark();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isDark = state.theme === "dark" || (state.theme === "system" && prefersDark);

    const toggleTheme = () => {
        dispatch?.({ type: "set", payload: { theme: isDark ? "light" : "dark" } });
    };

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const links = (
        <>
            <Link to="/" state={{ section: "projects" }}>Projects</Link>
            <Link to="/" state={{ section: "about" }}>About</Link>
            <Link to="/" state={{ section: "contact" }}>Contact</Link>
        </>
    );

    return <header className="menu">
        <div className="wrap menu-bar">
            <Link className="brand" to="/">
                <img src={`${process.env.PUBLIC_URL || ''}/images/logo.png`} alt="" width="40" height="40" />
                <span>Regev Makes</span>
            </Link>
            <nav className="links" aria-label="Main">
                {links}
            </nav>
            <button type="button" className="icon-button" onClick={toggleTheme}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
                {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button type="button" className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-menu">
                <MenuIcon open={menuOpen} />
            </button>
        </div>
        {menuOpen && <div id="site-menu" className="menu-panel">
            <nav className="wrap menu-panel-links" aria-label="Main">
                {links}
            </nav>
            <div className="wrap menu-panel-external">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/regev-tal/">LinkedIn ↗</a>
                <a target="_blank" rel="noreferrer" href="https://github.com/regevt">GitHub ↗</a>
            </div>
        </div>}
    </header>
}
