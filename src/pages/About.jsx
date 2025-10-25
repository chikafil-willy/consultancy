import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-section">
      <h1>Core Services</h1>
      <p>
        Our services are tailored to support women towards enjoying whole wellness of body and soul while navigating the hassles of parenting and motherhood.
      </p>

      <div className="section-break"></div> {/* 🔥 This adds the space */}

      <div className="about-block">
        <img src="/prenatal.jpg" alt="Prenatal Support" className="section-image" />
        <h2>Prenatal (Antenatal) Support</h2>
        <ul>
          <li>Support for first and expectant women</li>
          <li>Birth preparation and complication readiness sessions</li>
          <li>
            We provide technical and mental support before and during pregnancy to help you prepare for a happy, healthy delivery. Especially for first-time mothers, we offer reassurance and guidance to manage anxiety.
          </li>
        </ul>
      </div>

      <div className="about-block">
        <img src="/delivery-kits.jpg" alt="Safe Delivery Kits" className="section-image" />
        <h3>Safe Delivery Kits</h3>
        <p>
          We provide a complete, safe, and quality delivery kit as part of our Birth Preparedness Package.
        </p>
      </div>

      <div className="about-block">
        <img src="/insurance.jpg" alt="Health Insurance Guide" className="section-image" />
        <h3>Health Insurance Guide</h3>
        <p>
          We guide you on securing appropriate health insurance coverage for yourself and your child.
        </p>
      </div>

      <div className="about-block">
        <img src="/calm-corner.jpg" alt="Calm Corner" className="section-image" />
        <h2>Calm Corner</h2>
        <p>
          Your feelings and pains are valid—no judgment here. This space is for women and men at risk of depression, to help them regain strength and self-confidence.
        </p>
        <ul>
        <li>
         Stress management & emotional resilience training
      <ul>
        <li>Learn how to manage daily stress and emotional overload</li>
        <li>Enjoy guided relaxation, deep breathing, and light movement</li>
        <li>Connect with other women who understand your journey</li>
        <li>Receive a wellness toolkit you can use at home</li>
      <li>Walk away feeling lighter, calmer, and more in control</li>
    </ul>
   </li>
    <li>Group stress relief sessions (breathing, mindfulness, aerobics, games)</li>
  < li>Private counselling and therapy sessions</li>
  < li>Screening and support for prenatal & postpartum depression and anxiety</li>
  < li>Creating a private, supportive community of calm and powerful people</li>
</ul>
    </div>

      <div className="about-block">
        <img src="/childhood.jpg" alt="Child Care & Immunization" className="section-image" />
        <h2>Early Childhood Care & Immunization</h2>
        <ul>
          <li>Advice on hygiene and safety of young children</li>
          <li>Education on immunizations, common illnesses, and child safety</li>
        </ul>
      </div>

      <div className="about-block">
        <img src="/community.jpg" alt="Community Support" className="section-image" />
        <h2>Community & Peer Support</h2>
        <p>
          We organize support groups for mothers to share experiences and gain mutual encouragement through:
        </p>
        <ul>
          <li>Workshops</li>
          <li>Webinars</li>
          <li>Events focused on maternal and child health</li>
        </ul>
      </div>
    </section>
  );
}
