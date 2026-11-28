import { FC, useEffect, useMemo, useState } from "react";
import "./Home.css"
import { Card } from "../../Components/Card/Card";
import { Link, useLocation } from "react-router-dom";
import { Pages } from "../../Pages"
import { Footer } from "../../Components/Footer/Footer";
import { useLocale } from "../../hooks/useLocale";

const ALL = "All";

export const Home: FC = () => {
    const location = useLocation();
    const [category, setCategory] = useState(ALL);
    const { t, category: categoryLabel } = useLocale();

    const categories = useMemo(() => {
        const names = Array.from(new Set(Pages.map(p => p.data.category)));
        return [ALL, ...names].map(name => ({
            name,
            count: name === ALL ? Pages.length : Pages.filter(p => p.data.category === name).length,
        }));
    }, []);

    const cards = useMemo(() => {
        return Pages
            .filter(proj => category === ALL || proj.data.category === category)
            .map(proj => <Link to={`project/${proj.data.id}`} key={proj.data.projectName}><Card project={proj.data} /></Link>)
    }, [category])

    useEffect(() => {
        const section = (location.state as { section?: string } | null)?.section;
        if (!section) {
            window.scrollTo(0, 0);
            return;
        }
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [location]);

    return <main className="home">
        <section className="wrap intro">
            <span className="eyebrow">{t("home.eyebrow", { count: Pages.length })}</span>
            <h1>{t("home.title")}</h1>
            <p className="lede">{t("home.lede")}</p>
        </section>

        <section id="projects" className="wrap projects">
            <div className="chips" role="group" aria-label={t("home.filter")}>
                {categories.map(c =>
                    <button type="button" key={c.name} className="chip" aria-pressed={category === c.name}
                        onClick={() => setCategory(c.name)}>
                        {categoryLabel(c.name)}<span className="count">{c.count}</span>
                    </button>
                )}
            </div>
            <div className="card-grid">
                {cards}
            </div>
        </section>

        <section id="about" className="wrap about">
            <div className="about-content">
                <h2>{t("home.about")}</h2>
                <div className="about-text">
                    <p>{t("home.about1")}</p>
                    <p className="soft">{t("home.about2")}</p>
                </div>
                <div id="contact" className="contact">
                    <span className="label">{t("home.elsewhere")}</span>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/regev-tal/">LinkedIn ↗</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/regevt">GitHub ↗</a>
                </div>
            </div>
        </section>
        <Footer />
    </main>
}
