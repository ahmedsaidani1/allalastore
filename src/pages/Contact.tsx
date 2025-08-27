import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@ AllalaStore.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Tunis,Tunisia',
      description: 'We love meeting our community'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+216 12 345 678',
      description: 'Mon-Fri 9AM-6PM '
    },
   
    {
      icon: Clock,
      title: 'Support Hours',
      details: '24/7 Online Support',
      description: 'We\'re always here to help'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B5CF6]/20 to-[#3B82F6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Have questions about our games or need support? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 group text-center"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] w-fit mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-purple-400 font-medium mb-1">{info.details}</p>
                <p className="text-[#9CA3AF] text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-[#9CA3AF] text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
            

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Quick Help</h3>
                <div className="space-y-4">
                  
                  
                  
                  
                  <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2 text-purple-400" />
                      Do you offer refunds?
                    </h4>
                    <p className="text-[#9CA3AF] text-sm">
                      Yes! We offer a 14-day refund policy for all digital purchases. Contact our support team for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8B5CF6]/10 to-[#3B82F6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Gaming?
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-8 max-w-2xl mx-auto">
            Don't wait any longer! Browse our extensive collection of games and find your next favorite title.
          </p>
          <a
            href="/shop"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
          >
            Browse Games
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;