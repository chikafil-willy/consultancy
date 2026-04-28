import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Activity, Brain, Smartphone } from "lucide-react";

const Programmes = () => {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const titleRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
    color: "#0a7cff",
  };

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center", fontSize: "32px", marginBottom: "30px" }}
      >
        Our Programmes
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >

        {/* Maternal Health Awareness */}
        <div style={cardStyle}>
          <div style={titleRow}>
            <Heart size={24} />
            <h2>Maternal Health Awareness</h2>
          </div>
          <p>
            From inception, Safe Mum Initiative was birthed under Olea Fresh Mamacare Ltd as the result of lived experiences of the founder. There are important things to be aware of before, during, and after pregnancy.
          </p>
          <p>
            The campaign for birth preparedness started with sexual and reproductive health rights for young girls and women in communities such as faith-based organizations, market women groups, and families.
          </p>
          <ul>
            <li>Registering early for ANC</li>
            <li>Finding nearby emergency healthcare facilities</li>
            <li>Preparing safe and hygienic birth kits</li>
            <li>Planning transportation and emergencies</li>
            <li>Encouraging family and community support</li>
          </ul>
        </div>

        {/* Antenatal Care */}
        <div style={cardStyle}>
          <div style={titleRow}>
            <Activity size={24} />
            <h2>Antenatal Care Health Education</h2>
          </div>
          <p>
            We provide engaging antenatal care education that equips pregnant women with practical knowledge for safe pregnancy and childbirth, including one-on-one guidance through BPCR plans and support with safe birth kits.
          </p>
          <p>
            Through antenatal visits, digital content, and health worker support, SafeMum educates mothers on essential health practices.
          </p>
          <ul>
            <li>Take ANC appointments seriously</li>
            <li>Know danger signs and what to do</li>
            <li>Adhere to prescribed drugs</li>
            <li>Attend postnatal checkups</li>
            <li>Complete child immunization</li>
            <li>Ensure birth registration</li>
          </ul>
        </div>

        {/* Health Workers */}
        <div style={cardStyle}>
          <div style={titleRow}>
            <Users size={24} />
            <h2>Health Workers Capacity Training</h2>
          </div>
          <p>
            We provide targeted training sessions to strengthen the skills of health workers in maternal and newborn care.
          </p>
          <p>
            The program equips healthcare providers with up-to-date knowledge on respectful maternity care, emergency response, effective communication, and data-driven decision-making.
          </p>
        </div>

        {/* Mental Health */}
        <div style={cardStyle}>
          <div style={titleRow}>
            <Brain size={24} />
            <h2>Mental Health Promotion</h2>
          </div>
          <p>
            Maternal care and mental health are closely connected. Women may experience postpartum depression, anxiety, or stress during and after pregnancy.
          </p>
          <p>
            Men are also affected, and when included in maternal care, they are better prepared to support and manage family responsibilities.
          </p>
          <p>
            We create safe spaces for both men and women for open conversations, stress relief, and mental health support.
          </p>
        </div>

        {/* App */}
        <div style={cardStyle}>
          <div style={titleRow}>
            <Smartphone size={24} />
            <h2>Get the SafeMum App</h2>
          </div>
          <p>
            Take control of your pregnancy journey with SafeMum. The app provides risk tracking, trusted health information, reminders, and guidance for safe delivery and newborn care.
          </p>
          <button
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "10px",
              backgroundColor: "#0a7cff",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Download SafeMum
          </button>
        </div>

      </div>
    </div>
  );
};

export default Programmes;
