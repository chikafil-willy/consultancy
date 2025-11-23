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
      title: "Welcome to Olea Fresh MamaCare",
      subtitle: "Supporting mothers and children with love and expertise."
    },
    {
      title: "Empowering Mothers",
      subtitle: "We provide guidance for a healthy pregnancy and early childhood care."
    },
    {
      title: "Your Trusted Partner",
      subtitle: "Building stronger families through education, wellness, and care."
    }
  ];

  const [current, setCurrent] = useState(0);

  // Newsletter States
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: newsletterEmail }]);

    if (error) {
      setMessage("This email already subscribed or invalid.");
    } else {
      setMessage("Thank you for subscribing!");
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

      {/* HERO SLIDER SECTION */}
      <section className="hero-slider" style={{ position: "relative", overflow: "hidden" }}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{
              width: "100%",
              height: "80vh",
              minHeight: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              /* ⭐ FULL IMAGE (NO CROPPING) */
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",   // FULL IMAGE
              backgroundPosition: "center",
              backgroundColor: "#000",     // Prevent white edges

              position: index === current ? "relative" : "absolute",
              top: 0,
              left: 0,
              opacity: index === current ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            {index === current && (
              <div
                className="hero-text"
                style={{
                  position: "absolute",
                  bottom: "60%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  padding: "0 1rem",
                  color: "#fff",
                  animation: "slideDown 1s ease forwards",
                  width: "100%",
                  maxWidth: "600px",
                }}
              >
                <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
                  {heroTexts[index].title}
                </h1>
                <p
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    padding: "0.6rem 1rem",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                >
                  {heroTexts[index].subtitle}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* KEYFRAMES + MOBILE RESPONSIVENESS */}
        <style>
          {`
            @keyframes slideDown {
              from { opacity: 0; transform: translate(-50%, 20px); }
              to { opacity: 1; transform: translate(-50%, 0); }
            }

            @media (max-width: 768px) {
              .hero-slider .hero-slide {
                height: 70vh !important;
                background-size: contain !important; /* STILL FULL IMAGE */
                background-position: center !important;
              }

              .hero-text h1 {
                font-size: 1.5rem !important;
              }

              .hero-text p {
                font-size: 0.9rem !important;
              }
            }
          `}
        </style>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>Why Olea Fresh MamaCare</h2>
        <p>
          <strong>Olea Fresh MamaCare Ltd</strong> is a trusted mother and child care consultancy firm
          dedicated to the physical, emotional, and educational well-being of mothers and children.
        </p>
        <p>
          We support mothers through pregnancy, childbirth, postpartum recovery, and early childhood development.
        </p>
        <p>
          Our mission is to build healthier families through education and wellness programs.
        </p>
      </section>

      {/* REQUEST SECTION */}
      <section className="request-section">
        <div className="hero-flex">
          <img src={requestImg} alt="Request Consultation" className="hero-side-img" />
          <div className="hero-text">
            <h2>Need Professional Mother & Child Care Support?</h2>
            <p>
              Book a personalized consultation session with our health experts.
            </p>
            <Link to="/request" className="btn">Request</Link>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="news-section">
        <div className="hero-flex reverse">
          <img src={newsImg} alt="News and Events" className="hero-side-img" />
          <div className="hero-text">
            <h2>Stay Updated with Our News & Events</h2>
            <p>
              Explore workshops, health talks, and community programs.
            </p>
            <Link to="/news-event" className="btn">News & Events</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
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
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
          Stay Updated With Our Newsletter
        </h2>

        <p style={{ maxWidth: "500px", margin: "0 auto 1.5rem auto" }}>
          Get mother & child care updates, wellness guides, and event alerts.
        </p>

        <form
          onSubmit={handleSubscribe}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            style={{
              padding: "0.8rem",
              borderRadius: "6px",
              border: "none",
              flex: 1,
            }}
            required
          />
          <button
            style={{
              padding: "0.8rem 1.2rem",
              borderRadius: "6px",
              border: "none",
              background: "#f8b400",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "1rem", color: "#fff", fontWeight: "bold" }}>
            {message}
          </p>
        )}
      </section>

    </main>
  );
};

export default Home;
