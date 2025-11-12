import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import smartSummarizeImage from 'figma:asset/d6e060a296b894baaa7454da30916078bfffa841.png';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Information We Collect',
      content: [
        'Tab URLs and titles that you choose to save',
        'Notes and tags you add to your sessions',
        'Extension settings and preferences',
        'Usage statistics (anonymous and aggregated)',
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'How We Use Your Information',
      content: [
        'To provide core tab management functionality',
        'To generate AI summaries when you enable this feature',
        'To sync your data across devices (if enabled)',
        'To improve the extension and fix bugs',
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Data Storage',
      content: [
        'All session data is stored locally in your browser by default',
        'AI summarization sends content to our secure servers only when enabled',
        'Data is encrypted in transit using HTTPS',
        'We do not sell or share your personal data with third parties',
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'AI Summarization',
      content: [
        'This feature is opt-in and disabled by default',
        'Page content is sent to Google Gemini API for processing',
        'Summaries are generated and returned to you',
        'Original page content is not stored on our servers',
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Your Rights',
      content: [
        'Access, update, or delete your data at any time',
        'Export all your sessions and data',
        'Disable AI features whenever you want',
        'Uninstall the extension to remove all local data',
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Security Measures',
      content: [
        'End-to-end encryption for data transmission',
        'Regular security audits and updates',
        'No tracking or analytics of browsing behavior',
        'Minimal permissions requested',
      ],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            Last updated: November 11, 2025
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Tab Saver, we take your privacy seriously. This policy explains how we handle your data.
          </p>
          <a
            href="https://github.com/Tab-Saver/PRIVACY-POLICY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            View full policy on GitHub →
          </a>
        </motion.div>

        {/* Privacy Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 mb-12"
        >
          <h2 className="text-gray-900 mb-6 text-center">Privacy & Security First</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Your data is encrypted and stored locally. AI summarization only processes content when you explicitly enable it,
            and all data is transmitted securely over HTTPS.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Local-First</h3>
              <p className="text-gray-600">Data stored in your browser by default</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Opt-In AI</h3>
              <p className="text-gray-600">AI features require explicit consent</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">No Tracking</h3>
              <p className="text-gray-600">We don't track your browsing</p>
            </div>
          </div>
        </motion.div>

        {/* Smart Summarize Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">Smart Summarize Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our AI summarization feature is completely opt-in. When you enable it, page content is sent
                securely to Google's Gemini API for processing. The AI generates summaries and returns them
                to you - we never store your original page content.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Disabled by default - you control when it's used</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>All data transmitted over secure HTTPS</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>No storage of your original page content</span>
                </li>
              </ul>
            </div>
            <img
              src={smartSummarizeImage}
              alt="Smart Summarize Interface"
              className="rounded-2xl shadow-xl border border-gray-200"
            />
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  {section.icon}
                </div>
                <h2 className="text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-2xl p-8"
        >
          <h2 className="text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 mb-4">
            Tab Saver uses the following third-party services:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
              <span><strong>Google Gemini API:</strong> Used for AI-powered page summarization (opt-in only)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
              <span><strong>Chrome Storage API:</strong> For storing your sessions locally and syncing across devices</span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="mb-4">Questions About Privacy?</h2>
          <p className="mb-6 opacity-90">
            If you have any questions or concerns about how we handle your data, please don't hesitate to reach out.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-6 py-3 rounded-lg"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

        {/* Legal Notice */}
        <div className="mt-12 text-center text-gray-500 border-t border-gray-200 pt-8">
          <p>
            By using Tab Saver, you agree to this Privacy Policy. We may update this policy from time to time,
            and will notify you of any material changes.
          </p>
        </div>
      </div>
    </div>
  );
}