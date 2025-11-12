import { motion } from 'motion/react';
import { Mail, MessageSquare, Bug, Lightbulb, Users, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    contactType: 'general',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Contact Type: ${formData.contactType}\n\nMessage:\n${formData.message}\n\nFrom: ${formData.email}`
    );
    const mailtoLink = `mailto:tabsaver.help@outlook.com?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ email: '', subject: '', message: '', contactType: 'general' });
  };

  const contactTypes = [
    {
      icon: <Bug className="w-6 h-6" />,
      title: 'Report Issues',
      description: 'Found a bug or experiencing problems? Let us know so we can fix it.',
      value: 'bug',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Suggestions & Recommendations',
      description: "Have ideas for new features or improvements? We'd love to hear them.",
      value: 'feature',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborations',
      description: "Interested in contributing to Tab Saver? Let's work together.",
      value: 'collaboration',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or want to collaborate? We're here to help!
          </p>
        </motion.div>

        {/* Contact Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setFormData({ ...formData, contactType: type.value })}
              className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all ${
                formData.contactType === type.value ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                {type.icon}
              </div>
              <h3 className="text-gray-900 mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h2 className="text-gray-900">Send us a message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Your Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Bug Report / Feature Request / General Feedback"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what's on your mind..."
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-3">Email Us Directly</h3>
            <p className="text-gray-600 mb-2">For urgent matters or detailed inquiries:</p>
            <a href="mailto:tabsaver.help@outlook.com" className="text-blue-600 hover:underline">
              tabsaver.help@outlook.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-3">Community Support</h3>
            <p className="text-gray-600 mb-2">Join our community for help and discussions:</p>
            <a href="https://github.com/orgs/Tab-Saver/discussions" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
              GitHub Discussions
            </a>
          </div>
        </motion.div>

        {/* Response Time Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-500"
        >
          <p>We typically respond within 24-48 hours during business days.</p>
        </motion.div>
      </div>
    </div>
  );
}