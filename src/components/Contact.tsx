import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">We'd love to hear from you. Please fill out the form below or reach out to us directly.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-2" />
                <span>contact@gravityflow.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>123 Gravity Lane, Flowville, FL 12345</span>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;