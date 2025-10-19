import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend server
    alert('Thank you for your message! This is just a demo, so your message has been logged to the console.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-center mb-4 text-primary">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-300 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-300 outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-300 outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="px-3 py-2 rounded-xl bg-primary text-black border border-black disabled:opacity-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
