import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/mama1.jpg";
import img2 from "../assets/mama2.jpg";
import img3 from "../assets/mama3.jpg";
import requestImg from "../assets/request.jpg";
import newsImg from "../assets/news.jpg";
import newsletterBg from "../assets/newsletter.jpg";
import { supabase } from "../supabaseClient"; // <-- ADD THIS

const Home = () => {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  // ⭐ Newsletter States
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [message, setMessage] = useState("");

  // ⭐ Handle Subscribe
  const handleSubscribe = async (e) => {
    e.preventDefault(); // stop page refresh

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

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="home">

      {/* HERO SLIDER SECTION */}
      <section className="hero-slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Olea Fresh MamaCare"
            className={`hero-image ${index === current ? "active" : ""}`}
          />
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>Why Olea Fresh MamaCare</h2>
        <p>
          <strong>Olea Fresh MamaCare Ltd</strong> is a trusted mother and child care consultancy firm 
          devoted to the physical, emotional, and educational well-being of mothers and their children. 
          We offer expert guidance, compassionate care, and practical solutions to support women throughout 
          pregnancy, childbirth, postpartum recovery, and early childhood development.
        </p>
        <p>
          Our services include antenatal education, postpartum counseling, nutrition and breastfeeding guidance, 
          early childhood immunization awareness, and maternal wellness programs. We believe every mother deserves 
          a safe, informed, and empowering experience — and every child deserves a healthy start to life.
        </p>
        <p>
          Through innovative health education, one-on-one consultations, and community-based programs, 
          Olea Fresh MamaCare stands as a reliable partner in building stronger, healthier families.
        </p>
      </section>

      {/* REQUEST HERO SECTION */}
      <section className="request-section">
        <div className="hero-flex">
          <img src={requestImg} alt="Request Consultation" className="hero-side-img" />
          <div className="hero-text">
            <h2>Need Professional Mother & Child Care Support?</h2>
            <p>
              Book a personalized consultation session today to receive professional guidance 
              from our health experts. We’re here to help you every step of the way.
            </p>
            <Link to="/request" className="btn">Request</Link>
          </div>
        </div>
      </section>

      {/* NEWS & EVENTS HERO SECTION */}
      <section className="news-section">
        <div className="hero-flex reverse">
          <img src={newsImg} alt="News and Events" className="hero-side-img" />
          <div className="hero-text">
            <h2>Stay Updated with Our News & Events</h2>
            <p>
              Explore our latest updates, workshops, health talks, and community programs 
              designed to empower mothers and strengthen family wellness.
            </p>
            <Link to="/news-event" className="btn">News & Events</Link>
          </div>
        </div>
      </section>

      {/* ⭐ NEWSLETTER SECTION */}
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

        <p style={{ maxWidth: "500px", margin: "0 auto 1.5rem auto", fontSize: "1rem" }}>
          Receive helpful mother & child care tips, updates, health guides, and upcoming events directly in your inbox.
        </p>

        {/* FORM */}
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

        {/* SUCCESS / ERROR MESSAGE */}
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
