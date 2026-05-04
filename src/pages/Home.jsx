import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/mama1.jpg";
import img2 from "../assets/mama2.jpg";
import img3 from "../assets/mama3.jpg";
import newsImg from "../assets/news.jpg";
import newsletterBg from "../assets/newsletter.jpg";
import programmesImg from "../assets/programmes.jpg";
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
  const [externalNews, setExternalNews] = useState([]);

  // Newsletter
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

  // Hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Google News
  useEffect(() => {
    const fetchExternalNews = async () => {
      try {
        const url =
          "https://api.rss2json.com/v1/api.json?rss_url=" +
          encodeURIComponent(
            "https://news.google.com/rss/search?q=maternal+health"
          );

        const res = await fetch(url);
        const data = await res.json();

        if (data.status === "ok") {
          setExternalNews(data.items.slice(0, 4));
        } else {
          setExternalNews([]);
        }
      } catch (err) {
        console.error(err);
        setExternalNews([]);
      }
    };

    fetchExternalNews();
  }, []);

  return (
    <main className="home">

      {/* 🔥 BIGGER SCROLLING BAR */}
      <section style={{ background: "#f8b400", overflow: "hidden" }}>
        <div className="scroll-container">
          <div className="scroll-text">
            SafeMum Initiative — Empowering mothers • Supporting families • Promoting safe pregnancy • Reducing maternal risks • Building healthier communities across Nigeria
          </div>
        </div>
      </section>

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
                  maxWidth: "600px",
                }}
              >
                <h1>{heroTexts[index].title}</h1>
                <p style={{
                  background: "rgba(0,0,0,0.6)",
                  padding: "10px",
                  borderRadius: "8px"
                }}>
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
          Safe Mum Initiative is dedicated to improving maternal and newborn health
          through education, healthcare access, and community engagement.
        </p>
      </section>

      {/* PROGRAMMES */}
      <section className="programmes-section">
        <div className="hero-flex">
          <img src={programmesImg} alt="Programmes" className="hero-side-img" />
          <div className="hero-text">
            <h2>Our Core Programmes</h2>

            <p>
              At SafeMum Initiative, our programmes are designed to provide
              practical, life-saving support for women before, during, and after pregnancy.
            </p>

            <p>
              We focus on <strong>Birth Preparedness (BPCR)</strong>, antenatal education,
              maternal mental health, and community-based awareness campaigns.
            </p>

            <p>
              Our outreach includes training sessions, digital education,
              and direct support to ensure women understand danger signs,
              access healthcare early, and prepare for safe delivery.
            </p>

            <p>
              Through these programmes, we are building informed families,
              strengthening healthcare systems, and reducing preventable maternal risks.
            </p>

            <Link to="/programmes" className="btn">Explore All Programmes</Link>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="news-section">
        <div className="hero-flex reverse">
          <img src={newsImg} alt="News" className="hero-side-img" />
          <div className="hero-text">
            <h2>News & Community Events</h2>

            <p>
              Stay connected with SafeMum Initiative through our latest updates,
              outreach activities, and maternal health campaigns.
            </p>

            <p>
              We regularly engage with communities through awareness programs,
              training workshops, and health education sessions that impact
              mothers and families directly.
            </p>

            <p>
              From local outreach in rural communities to digital campaigns
              reaching thousands online, our events showcase real impact.
            </p>

            <p>
              Follow our journey, see our impact, and stay informed on upcoming activities.
            </p>

            <Link to="/news-event" className="btn">View All News & Events</Link>
          </div>
        </div>
      </section>

      {/* 🌍 GLOBAL NEWS */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ textAlign: "center" }}>Global Maternal Health News</h2>

        {externalNews.length === 0 ? (
          <p style={{ textAlign: "center" }}>Loading news...</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: "20px",
            marginTop: "20px"
          }}>
            {externalNews.map((item, index) => (
              <div key={index} style={{
                background: "#111",
                color: "#fff",
                padding: "15px",
                borderRadius: "8px"
              }}>
                <h4>{item.title}</h4>
                <p style={{ fontSize: "14px", opacity: 0.7 }}>
                  {item.pubDate?.slice(0, 10)}
                </p>
                <a href={item.link} target="_blank" rel="noreferrer" style={{ color: "#f8b400" }}>
                  Read More →
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* NEWSLETTER */}
      <section style={{
        backgroundImage: `url(${newsletterBg})`,
        padding: "3rem 1rem",
        textAlign: "center",
        color: "#fff",
        marginTop: "3rem"
      }}>
        <h2>Stay Connected</h2>

        <form onSubmit={handleSubscribe} style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px"
        }}>
          <input
            type="email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <button>Subscribe</button>
        </form>

        {message && <p>{message}</p>}
      </section>

      {/* STATS */}
      <section style={{
        marginTop: "3rem",
        background: "#0a7cff",
        color: "#fff",
        padding: "2rem",
        textAlign: "center"
      }}>
        <h2>Our Impact</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))"
        }}>
          <div><h1>8000+</h1><p>People Reached</p></div>
          <div><h1>71+</h1><p>Campaigns</p></div>
          <div><h1>72+</h1><p>Women Trained</p></div>
          <div><h1>10+</h1><p>Mental Health Sessions</p></div>
        </div>
      </section>

    </main>
  );
};

export default Home;