import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">💖 Contact Us</h2>
      <p className="mb-4">We're here for you! Have questions about your health? Reach out to us!</p>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">📞 Get in Touch</h3>
        <p>Phone: [Insert Phone Number] (Available [Days & Hours])</p>
        <p>Email: [Insert Email] (Response time: 24-48 hours)</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">📍 Visit Us</h3>
        <p>Address: [Clinic/Office Address]</p>
        <p>Hours:</p>
        <ul>
          <li>⏰ Monday - Friday: [Opening Hours]</li>
          <li>⏰ Saturday - Sunday: [Opening Hours]</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">📩 Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-2 bg-gray-800 border rounded" type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
          <input className="w-full p-2 bg-gray-800 border rounded" type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
          <input className="w-full p-2 bg-gray-800 border rounded" type="text" name="subject" placeholder="Subject" onChange={handleChange} required />
          <textarea className="w-full p-2 bg-gray-800 border rounded" name="message" placeholder="Message" onChange={handleChange} required></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">💬 Connect with Us on Social Media</h3>
        <p>Stay updated with health tips and discussions:</p>
        <ul>
          <li>📷 Instagram: [@YourHandle]</li>
          <li>📘 Facebook: [Your Page]</li>
          <li>🐦 Twitter/X: [@YourHandle]</li>
          <li>📺 YouTube: [Your Channel]</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold">❓ Frequently Asked Questions (FAQs)</h3>
        <p>Before reaching out, check our <a href="/faqs" className="text-blue-400">FAQs page</a> for common health-related questions.</p>
      </div>
    </div>
  );
};

export default ContactUs;