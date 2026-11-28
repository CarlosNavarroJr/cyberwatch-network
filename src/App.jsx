import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import { featuredArticle } from "./data/featuredArticle";

import "./App.css";

const upcomingSections = [
  {
    id: "latest-news",
    title: "Latest Cybersecurity News",
  },
  {
    id: "categories",
    title: "News Categories",
  },
  {
    id: "videos",
    title: "CyberWatch Videos",
  },
  {
    id: "about",
    title: "About CyberWatchNetwork",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero article={featuredArticle} />

        {upcomingSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="section placeholder-section"
          >
            <div className="container">
              <h2 className="section-title">{section.title}</h2>

              <p className="section-description">
                Coming in an upcoming development step
              </p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
