import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function NewsEvent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setNews(data);
    };

    fetchNews();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <section className="section">
      <h2>News / Events</h2>
      {news.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        news.map((item) => (
          <div key={item.id} className="news-card">
            <img src={item.image_url} alt={item.subtitle} className="news-img" />
            <h3>{item.subtitle}</h3>
            <p className="news-date"><strong>Date:</strong> {formatDate(item.created_at)}</p>
            <p>{item.content}</p>
          </div>
        ))
      )}
    </section>
  );
}
