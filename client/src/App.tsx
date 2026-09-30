import { useEffect } from "react";
import "./App.css";
import { setupExperiment3 } from "./exp3";

function App() {
  useEffect(() => {
    setupExperiment3();
  }, []);

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <h2>Campus Connect</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main>

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <p className="small-heading">
            YOUR CAMPUS, YOUR COMMUNITY
          </p>

          <h1>Connect. Explore. Grow.</h1>

          <p id="welcomeText">
            Welcome to Campus Connect, your digital campus community.
            Discover events, connect with fellow students, and stay
            updated with everything happening around you.
          </p>

          <button
            id="exploreButton"
            className="primary-button"
          >
            Explore Campus
          </button>

          <img
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80"
            alt="University campus building"
            className="campus-image"
          />
        </section>

        {/* FEATURES SECTION */}
        <section className="features" id="features">
          <p className="small-heading">
            WHAT WE OFFER
          </p>

          <h2>Everything Campus, In One Place</h2>

          <div className="card-container">

            <article className="feature-card">
              <h3>Campus Events</h3>

              <p>
                Discover workshops, fests, clubs and activities
                happening around campus.
              </p>
            </article>

            <article className="feature-card">
              <h3>Student Community</h3>

              <p>
                Connect with students and build a strong
                campus community.
              </p>
            </article>

            <article className="feature-card">
              <h3>Academic Resources</h3>

              <p>
                Find useful academic resources and stay updated
                with important information.
              </p>
            </article>

          </div>
        </section>

        {/* EXPERIMENT 3 INTERACTIVE SECTION */}
        <section
          className="interactive-section"
          id="about"
        >
          <p className="small-heading">
            INTERACTIVE CAMPUS
          </p>

          <h2>Campus Connect JavaScript</h2>

          <p>
            This section demonstrates DOM manipulation,
            events and dynamic content using JavaScript.
          </p>

          {/* TEXT INPUT */}
          <div className="interaction-box">

            <h3>1. Enter Your Name</h3>

            <input
              type="text"
              id="studentName"
              placeholder="Enter your name"
            />

            <p id="liveMessage">
              Start typing your name...
            </p>

          </div>

          {/* KEYBOARD EVENT */}
          <div className="interaction-box">

            <h3>2. Add a Campus Announcement</h3>

            <p>
              Type an announcement and press
              <strong> Enter</strong>.
            </p>

            <input
              type="text"
              id="announcementInput"
              placeholder="Type an announcement..."
            />

            <div id="announcementList"></div>

          </div>

        </section>

        {/* CONTACT SECTION */}
        <section
          className="contact-section"
          id="contact"
        >
          <h2>Stay Connected</h2>

          <p>
            Campus Connect helps students discover,
            explore and participate in campus life.
          </p>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Campus Connect. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;