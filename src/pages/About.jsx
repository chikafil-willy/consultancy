import React from "react";

const About = () => {
  const sectionStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    marginBottom: "20px",
  };

  const titleStyle = {
    color: "#0a7cff",
    marginBottom: "10px",
    fontSize: "20px",
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
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        About Safe Mum Initiative
      </h1>

      {/* Executive Summary */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Executive Summary</h2>
        <p>
          Safe Mum Initiative is a non-profit organization dedicated to improving
          women’s health through maternal and newborn health outcomes, particularly
          among underserved and vulnerable populations.
        </p>
        <p>
          We ensure safe pregnancy, childbirth, and postnatal care through healthcare
          access, education, community support, and technology-driven solutions.
        </p>
      </div>

      {/* Vision & Mission */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Vision</h2>
        <p>
          A world where no woman dies from preventable pregnancy-related causes and
          every child is given a healthy start to life.
        </p>

        <h2 style={titleStyle}>Mission</h2>
        <p>
          To improve maternal and newborn health by providing accessible, innovative,
          and community-driven solutions for safe pregnancy, childbirth, and postnatal care.
        </p>
      </div>

      {/* Core Values */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Core Values</h2>
        <ul>
          <li>Equity – Equal access to maternal healthcare for all women</li>
          <li>Compassion – Care delivered with empathy and respect</li>
          <li>Integrity – Transparency and accountability</li>
          <li>Innovation – Technology-driven health solutions</li>
          <li>Collaboration – Working with partners for impact</li>
        </ul>
      </div>

      {/* Objectives */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Objectives</h2>
        <ul>
          <li>Improve access to antenatal, delivery, and postnatal care</li>
          <li>Promote maternal health education and awareness</li>
          <li>Strengthen healthcare worker capacity</li>
          <li>Reduce barriers to healthcare access</li>
          <li>Promote maternal mental health</li>
          <li>Advocate for maternal health policies</li>
          <li>Strengthen community engagement</li>
          <li>Support research and digital innovation</li>
          <li>Provide outreach services</li>
          <li>Empower women economically</li>
        </ul>
      </div>

      {/* Programs */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Key Program Areas</h2>
        <ul>
          <li>Maternal and newborn health services</li>
          <li>Community health education</li>
          <li>SafeMum digital health app</li>
          <li>Healthcare worker training</li>
          <li>Advocacy and partnerships</li>
        </ul>
      </div>

      {/* Beneficiaries */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Target Beneficiaries</h2>
        <ul>
          <li>Pregnant women</li>
          <li>Nursing mothers</li>
          <li>Adolescent girls</li>
          <li>Rural and underserved communities</li>
          <li>Healthcare providers</li>
        </ul>
      </div>

      {/* Strategy */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Implementation Strategy</h2>
        <ul>
          <li>Community-based interventions</li>
          <li>Healthcare facility partnerships</li>
          <li>Technology-driven outreach</li>
          <li>Data-driven decision making</li>
        </ul>
      </div>

      {/* M&E */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Monitoring & Evaluation</h2>
        <p>
          We track program performance, measure impact, and ensure accountability
          using key indicators such as:
        </p>
        <ul>
          <li>Antenatal care attendance rates</li>
          <li>Skilled birth attendance</li>
          <li>Teenage pregnancy rates</li>
          <li>Maternal and neonatal mortality rates</li>
        </ul>
      </div>

      {/* Contact */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Contact Information</h2>
        <p><strong>Safe Mum Initiative</strong></p>
        <p>Name: Jane Chinwe Williams</p>
        <p>Location: Abuja, Nigeria</p>
        <p>Email: ofmamacare@gmail.com</p>
      </div>

      {/* Conclusion */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Conclusion</h2>
        <p>
          Safe Mum Initiative is committed to transforming maternal and newborn
          health outcomes through innovative, inclusive, and sustainable approaches.
          We aim to save lives and empower communities.
        </p>
      </div>
    </div>
  );
};

export default About;