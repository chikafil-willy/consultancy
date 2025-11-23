import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function News() {
  const [news, setNews] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) setNews(data);
    };

    fetchNews();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const latestNews = news.length > 0 ? news[0] : null;
  const moreNews = news.slice(1);

  return (
    <section style={{ padding: "20px", backgroundColor: "#202020ff" }}>

      {/* Section Title */}
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "10px", color: "#fff" }}>
        Welcome to Olea Fresh MamaCare News & Events
      </h2>

      <p style={{
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto 30px auto",
        lineHeight: 1.5,
        color: "#fff"
      }}>
        Stay informed with our latest updates, community activities, health programs,
        and all upcoming MamaCare events.
      </p>

      {/* LATEST NEWS */}
      <h2 style={{ marginBottom: "10px", color: "#fff" }}>Latest News</h2>

      {!latestNews ? (
        <p style={{ color: "#fff" }}>No news available yet.</p>
      ) : (
        <div
          style={{
            width: window.innerWidth > 1024
              ? "1580px"
              : window.innerWidth > 768
              ? "95%"
              : "100%",
            margin: "0 auto 30px auto",
          }}
        >
          <img
            src={latestNews.image_url}
            className="news-image"
            style={{
              width: "100%",
              height: window.innerWidth > 1024
                ? "595px"
                : window.innerWidth > 768
                ? "280px"
                : "250px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />

          <h3 style={{ color: "#fff", marginBottom: "5px" }}>{latestNews.subtitle}</h3>
          <p style={{ color: "#fff", opacity: 0.7, marginBottom: "10px" }}>
            <strong>Date:</strong> {formatDate(latestNews.created_at)}
          </p>

          <p style={{ color: "#fff", lineHeight: 1.6 }}>
            {expanded === latestNews.id
              ? latestNews.content
              : latestNews.content.slice(0, 140) + "..."}
          </p>

          <button
            onClick={() =>
              setExpanded(expanded === latestNews.id ? null : latestNews.id)
            }
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {expanded === latestNews.id ? "Show Less ▲" : "Read More →"}
          </button>
        </div>
      )}

      {/* MORE NEWS */}
      {moreNews.length > 0 && (
        <>
          <h2 style={{ marginBottom: "10px", color: "#fff" }}>More News</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
              gap: "20px",
              maxWidth: "1600px",
              margin: "0 auto",
            }}
          >
            {moreNews.map((item) => (
              <div
                key={item.id}
                style={{
                  width: "100%",
                }}
              >
                <img
                  src={item.image_url}
                  className="news-image"
                  style={{
                    width: "100%",
                    height: window.innerWidth > 1024
                      ? "230px"
                      : window.innerWidth > 768
                      ? "300px"
                      : "250px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />

                <h3 style={{ color: "#fff", marginBottom: "5px" }}>{item.subtitle}</h3>
                <p style={{ color: "#fff", opacity: 0.7, marginBottom: "10px" }}>
                  <strong>Date:</strong> {formatDate(item.created_at)}
                </p>

                <p style={{ color: "#fff", lineHeight: 1.6 }}>
                  {expanded === item.id
                    ? item.content
                    : item.content.slice(0, 120) + "..."}
                </p>

                <button
                  onClick={() =>
                    setExpanded(expanded === item.id ? null : item.id)
                  }
                  style={{
                    background: "none",
                    border: "none",
                    color: "#007bff",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  {expanded === item.id ? "Show Less ▲" : "Read More →"}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
