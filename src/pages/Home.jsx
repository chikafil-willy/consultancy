import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/mama1.jpg";
import img2 from "../assets/mama2.jpg";
import img3 from "../assets/mama3.jpg";
import requestImg from "../assets/request.jpg";
import newsImg from "../assets/news.jpg";
import newsletterBg from "../assets/newsletter.jpg";
import { supabase } from "../supabaseClient";

const Home = () => {
  const images = [img1, img2, img3];
  const heroTexts = [
    {
      title: "Welcome to Safe Mum Initiative",
      subtitle:
        "Improving maternal and newborn health through care, education, and community support.",
    },
    {
      title: "Empowering Mothers & Families",
      subtitle:
        "We guide women through pregnancy, childbirth, and early childhood development.",
    },
    {
      title: "A Trusted Maternal Health Partner",
      subtitle:
        "Building healthier communities through innovation, training, and outreach.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: newsletterEmail }]);

    if (error) {
      setMessage("This email is already subscribed or invalid.");
    } else {
      setMessage("Thank you for subscribing to Safe Mum Initiative!");
      setNewsletterEmail("");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero-slider" style={{ position: "relative", overflow: "hidden" }}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "80vh",
              minHeight: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundColor: "#000",
              position: index === current ? "relative" : "absolute",
              top: 0,
              left: 0,
              opacity: index === current ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            {index === current && (
              <div
                style={{
                  position: "absolute",
                  bottom: "60%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  color: "#fff",
                  width: "100%",
                  maxWidth: "600px",
                }}
              >
                <h1 style={{ fontSize: "2.2rem" }}>{heroTexts[index].title}</h1>
                <p style={{ background: "rgba(0,0,0,0.6)", padding: "10px", borderRadius: "8px" }}>
                  {heroTexts[index].subtitle}
                </p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>Why Safe Mum Initiative</h2>
        <p>
          Safe Mum Initiative is a maternal and newborn health organization dedicated to improving
          the wellbeing of mothers and children through education, healthcare access, and community support.
        </p>
        <p>
          We support women through pregnancy, childbirth, postpartum recovery, and early childhood development.
        </p>
        <p>
          Our mission is to ensure every mother experiences a safe pregnancy and every child has a healthy start to life.
        </p>
      </section>

      {/* PROGRAMMES SECTION */}
      <section className="programmes-section">
        <div className="hero-flex">
          <div className="hero-text">
            <h2>Explore Our Safe Mum Programmes</h2>
            <p>
              We deliver structured maternal health programmes designed to support women before, during, and after pregnancy.
            </p>
            <p>
              From community education to emergency preparedness and mental health support, our initiatives build stronger families.
            </p>
            <p>
              Discover our outreach, training, and digital health solutions.
            </p>
            <Link to="/programmes" className="btn">View Programmes</Link>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="news-section">
        <div className="hero-flex reverse">
          <img src={newsImg} alt="News" className="hero-side-img" />
          <div className="hero-text">
            <h2>Safe Mum News & Events</h2>
            <p>Stay updated on outreach programs and community health activities.</p>
            <Link to="/news-event" className="btn">News & Events</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        style={{
          backgroundImage: `url(${newsletterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "3rem 1rem",
          textAlign: "center",
          color: "#fff",
          marginTop: "3rem",
          borderRadius: "10px",
        }}
      >
        <h2>Stay Connected with Safe Mum Initiative</h2>
        <p>Receive updates and maternal health tips directly in your inbox.</p>

        <form
          onSubmit={handleSubscribe}
          style={{ display: "flex", justifyContent: "center", gap: "10px", maxWidth: "500px", margin: "auto" }}
        >
          <input
            type="email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            placeholder="Enter email"
            style={{ padding: "10px", borderRadius: "6px", border: "none", flex: 1 }}
            required
          />
          <button style={{ background: "#f8b400", border: "none", padding: "10px 15px", borderRadius: "6px" }}>
            Subscribe
          </button>
        </form>

        {message && <p>{message}</p>}
      </section>

      {/* STATS */}
      <section style={{ marginTop: "3rem", padding: "3rem 1rem", background: "#0a7cff", color: "#fff", textAlign: "center", borderRadius: "10px" }}>
        <h2>Our Impact Since 2023</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "20px" }}>
          <div><h1>8000+</h1><p>People Reached</p></div>
          <div><h1>71+</h1><p>Digital Campaigns</p></div>
          <div><h1>45</h1><p>BPCR Trained Women</p></div>
          <div><h1>Many</h1><p>Mental Health Sessions</p></div>
        </div>
      </section>

    </main>
  );
};

export default Home;