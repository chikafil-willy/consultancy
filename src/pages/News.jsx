import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

// ⭐ Import images normally (not require)
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

export default function News() {
  const [news, setNews] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [slider1, slider2, slider3, slider4];

  useEffect(() => {
    // fetch news
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setNews(data);
    };

    fetchNews();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section style={{ padding: "20px" }}>

      {/* ⭐ Welcome Note */}
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "10px" }}>
        Welcome to Olea Fresh MamaCare News & Events
      </h2>
      <p style={{
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto 30px auto",
        lineHeight: 1.5
      }}>
        Stay informed with our latest updates, community activities, health programs,
        and all upcoming MamaCare events.
      </p>

      {/* ⭐ HERO SLIDER */}
      <div
        style={{
          width: "100%",
           height: window.innerWidth > 768 ? "760px" : "260px", // ⭐ Larger on desktop
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          marginBottom: "40px",
        }}
      >
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero slide"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: window.innerWidth > 768 ? "center 40%" : "center", // ⭐ Start from top on desktop
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              transform: window.innerWidth > 768 ? "scale(1.1)" : "scale(1)", // ⭐ Zoom on desktop
            }}
          />
        ))}
      </div>

      {/* ⭐ NEWS LIST */}
      <h2 style={{ marginBottom: "10px" }}>Latest News</h2>

      {news.length === 0 ? (
        <p>No news available yet.</p>
      ) : (
        news.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "25px",
            }}
          >
            {/* News Image */}
            <img
              src={item.image_url}
              alt={item.subtitle}
              style={{
                width: "100%",
                height: window.innerWidth > 768 ? "740px" : "250px", // ⭐ Bigger on desktop
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />

            <h3 style={{ marginBottom: "8px" }}>{item.subtitle}</h3>

            <p style={{ opacity: 0.7, marginBottom: "12px" }}>
              <strong>Date:</strong> {formatDate(item.created_at)}
            </p>

            {/* Preview or Full Text */}
            {expanded === item.id ? (
              <p style={{ lineHeight: 1.6 }}>{item.content}</p>
            ) : (
              <p style={{ lineHeight: 1.6 }}>
                {item.content.slice(0, 140)}...
              </p>
            )}

            {/* Read More / Show Less */}
            <button
              onClick={() =>
                setExpanded(expanded === item.id ? null : item.id)
              }
              style={{
                background: "none",
                border: "none",
                color: "#007bff",
                cursor: "pointer",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              {expanded === item.id ? "Show Less ▲" : "Read More →"}
            </button>
          </div>
        ))
      )}
    </section>
  );
}
