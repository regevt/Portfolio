import { FC, useEffect, useMemo, useState } from "react";
import "./Home.css"
import { Card } from "../../Components/Card/Card";
import { Link, useLocation } from "react-router-dom";
import { Pages } from "../../Pages"
import { Footer } from "../../Components/Footer/Footer";

const ALL = "All";

export const Home: FC = () => {
    const location = useLocation();
    const [category, setCategory] = useState(ALL);

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
            <span className="eyebrow">Workshop log · {Pages.length} builds</span>
            <h1>I build things from wood, filament and solder.</h1>
            <p className="lede">Software developer by day. These are the weekend projects: what I made, what I used, and what I would do differently next time.</p>
        </section>

        <section id="projects" className="wrap projects">
            <div className="chips" role="group" aria-label="Filter projects">
                {categories.map(c =>
                    <button type="button" key={c.name} className="chip" aria-pressed={category === c.name}
                        onClick={() => setCategory(c.name)}>
                        {c.name}<span className="count">{c.count}</span>
                    </button>
                )}
            </div>
            <div className="card-grid">
                {cards}
            </div>
        </section>

        <section id="about" className="wrap about">
            <div className="about-content">
                <h2>About</h2>
                <div className="about-text">
                    <p>I'm Regev Tal-Snijder, a software developer, hobbyist woodworker and tinkerer. I started with a rotten balcony deck and kept going: planters, a dog bowl stand, breadboard computers and anything a 3D printer can make.</p>
                    <p className="soft">Most of these are first attempts. Each page says what went wrong as well as what worked.</p>
                </div>
                <div id="contact" className="contact">
                    <span className="label">Elsewhere</span>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/regev-tal/">LinkedIn ↗</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/regevt">GitHub ↗</a>
                </div>
            </div>
        </section>
        <Footer />
    </main>
}
