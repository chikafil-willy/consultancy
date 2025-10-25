import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Request from "./pages/Request";
import News from "./pages/News";
import { supabase } from "./supabaseClient"; // ✅ Import your Supabase client

const App = () => {
  useEffect(() => {
    // 👇 Ping Supabase to prevent project from pausing
    const pingSupabase = async () => {
      try {
        await supabase.from("consultations").select("id").limit(1); 
        console.log("✅ Supabase keep-alive ping sent");
      } catch (err) {
        console.error("❌ Supabase ping failed:", err.message);
      }
    };

    // Run once when the app loads
    pingSupabase();

    // Optional: repeat every 7 days (in milliseconds)
    const week = 7 * 24 * 60 * 60 * 1000;
    const interval = setInterval(pingSupabase, week);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/request" element={<Request />} />
        <Route path="/news-event" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
