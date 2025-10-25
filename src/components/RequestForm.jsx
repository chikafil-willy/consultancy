import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function RequestForm() {
  const categoryOptions = [
    { name: "Monthly", price: 20000 },
    { name: "Annually", price: 100000 }
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    category: "",
    price: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      const selected = categoryOptions.find(opt => opt.name === value);
      setForm(prev => ({
        ...prev,
        category: value,
        price: selected ? selected.price : ""
      }));
      return;
    }

    if (name === "message" && value.length > 100) return;

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("consultations").insert([form]);

      if (error) {
        console.error("Error submitting form:", error.message);
        setStatus("Error submitting request.");
      } else {
        setStatus(
          "Request submitted successfully!\n\n" +
          "Please make payment to:\n" +
          "Olea Fresh Mamacare Ltd\n" +
          "United Bank of Africa(UBA)\n" +
          "Account Number: 1026434561\n\n" +
          "Use your full name as payment reference. Thank you!"
        );

        // Reset form
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
          category: "",
          price: ""
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setStatus("An unexpected error occurred.");
    }
  };

  const isFormDisabled = form.category === "";

  return (
    <form onSubmit={handleSubmit} className="form" id="request">
      <h2>Request Our Services</h2>

      <select name="category" required value={form.category} onChange={handleChange}>
        <option value="">Select a category</option>
        {categoryOptions.map(opt => (
          <option key={opt.name} value={opt.name}>
            {opt.name} - ₦{opt.price.toLocaleString()}
          </option>
        ))}
      </select>

      {form.price && (
        <p><strong>Price:</strong> ₦{form.price.toLocaleString()}</p>
      )}

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={form.name}
        onChange={handleChange}
        disabled={isFormDisabled}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        required
        value={form.phone}
        onChange={handleChange}
        disabled={isFormDisabled}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        disabled={isFormDisabled}
      />
      <textarea
        name="message"
        placeholder="What you want from us (max 100 words)"
        required
        value={form.message}
        onChange={handleChange}
        disabled={isFormDisabled}
      />
      <button type="submit" disabled={isFormDisabled}>
        Submit
      </button>

      {status && (
        <div className="status-box">
          {status.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </form>
  );
}
