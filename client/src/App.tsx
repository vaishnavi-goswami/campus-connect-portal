
import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">Campus Connect</div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Home Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="subtitle">
              YOUR CAMPUS, YOUR COMMUNITY
            </p>

            <h1>Connect. Explore. Grow.</h1>

            <p className="hero-text">
              Welcome to Campus Connect, your digital
              campus community. Discover events, connect
              with fellow students, and stay updated
              with everything happening around you.
            </p>

            <a href="#features" className="hero-button">
              Explore Campus
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              alt="University campus"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section" id="features">
          <div className="section-heading">
            <p className="subtitle">WHAT WE OFFER</p>

            <h2>Everything Campus, In One Place</h2>

            <p>
              Stay connected with your college through
              events, student communities, and academic
              resources.
            </p>
          </div>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="card-number">01</div>
              <h3>Campus Events</h3>
              <p>
                Discover college festivals, workshops,
                competitions, and upcoming campus events.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-number">02</div>
              <h3>Student Community</h3>
              <p>
                Connect with fellow students, share
                interests, and build meaningful friendships.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-number">03</div>
              <h3>Academic Resources</h3>
              <p>
                Find useful study materials, academic
                updates, and resources in one place.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content">
            <p className="subtitle">ABOUT CAMPUS CONNECT</p>

            <h2>Making Campus Life Better</h2>

            <p>
              Campus Connect is a student-focused portal
              designed to bring the college community
              closer together.
            </p>

            <p>
              From discovering campus activities to
              accessing useful academic information,
              our goal is to make college life more
              connected, engaging, and accessible.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div>
          <h3>Campus Connect</h3>
          <p>Your campus. Your community.</p>
        </div>

        <div className="footer-contact">
          <p>Have questions or suggestions?</p>
          <a href="mailto:campusconnect@example.com">
            Contact Us
          </a>
        </div>

        <p className="copyright">
          © 2026 Campus Connect. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
