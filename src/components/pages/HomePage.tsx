import { motion } from 'motion/react';
import { Download, Github, Sparkles, FolderOpen, Tag, Brain, ArrowRight, Globe, Zap, FileText, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedIcons from '../AnimatedIcons';
import savedSessionsImage from 'figma:asset/saved-sessions-screenshot.png';
import folderCheckImage from 'figma:asset/f1ec68c60386c2233b158dd66c457ddd1a541110.png';
import tabSaverScreenshot from 'figma:asset/tab-saver-screenshot.png';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <FolderOpen className="w-6 h-6" />,
      title: 'Save All Tabs',
      description: 'Instantly save all your open tabs in organized sessions with one click',
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: 'Notes & Tags',
      description: 'Add custom notes and tags to organize and categorize your sessions',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Smart Summarize',
      description: 'AI-powered page summaries using Gemini 2.5 Flash for quick insights',
    },
  ];

  const stats = [
    { value: '280+', label: 'Organized collections' },
    { value: '94%', label: 'Summary quality rating' },
    { value: '5★', label: 'User rating' },
  ];

  const smartFeatures = [
    {
      title: 'Opt-In Only',
      description: 'AI summarization is disabled by default. You control when and what gets summarized.',
    },
    {
      title: 'Secure Processing',
      description: 'Content is sent over HTTPS to our secure backend API only when you explicitly enable the feature.',
    },
    {
      title: 'Instant Insights',
      description: 'Get concise summaries that capture key points, making it easy to find what you need later.',
    },
  ];

  const flowSteps = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Content Processing',
      description: "User's saved pages",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Gemini 2.5 Flash AI Processing',
      description: 'AI Processing',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'AI Summary Back to User',
      description: 'Back to user',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-gray-100 px-4 py-2 rounded-full mb-6"
              >
                Browser Extension
              </motion.div>
              
              <h1 className="text-gray-900 mb-6">
                Save Your Tabs.
                <br />
                Save Your Time.
              </h1>

              <p className="text-gray-600 mb-8 max-w-lg">
                Tab Saver is the ultimate browser extension that helps you organize,
                save, and restore your tabs with ease. Never lose your research,
                work, or browsing sessions again.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Extension
                </motion.a>

                <motion.a
                  href="https://github.com/Tab-Saver"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-16 shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={tabSaverScreenshot} 
                    alt="Tab Saver Interface" 
                    className="w-full h-auto rounded-2xl relative z-10 shadow-xl"
                  />
                  
                  {/* Animated floating icons */}
                  <AnimatedIcons />
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg"
              >
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tab Saver */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">Why Choose Tab Saver?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for productivity enthusiasts, researchers, and anyone who works with multiple
              tabs. Enhanced with AI-powered summarization for smarter browsing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions Management Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-gray-900">Organize Your Sessions</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Save all your tabs into organized sessions with custom tags. Search through your sessions
                by name, tag, notes, or date. Keep your browsing organized and never lose track of important tabs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Search sessions by name, tag, notes, or date</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Add custom notes to remember context</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Sort by newest, oldest, or custom order</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={savedSessionsImage}
                alt="Tab Saver Saved Sessions Interface"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Powered Smart Summarization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-green-600" />
                <h2 className="text-gray-900">AI-Powered Smart Summarization</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Tab Saver uses advanced AI to intelligently summarize your saved pages,
                helping you quickly recall important information without reopening every tab.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {smartFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <h3 className="text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Flow Diagram */}
              <div className="grid md:grid-cols-3 gap-4">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="bg-white rounded-xl p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-500">{step.description}</p>
                    </div>
                    {index < flowSteps.length - 1 && (
                      <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 text-green-500 z-10">
                        <ArrowRight className="w-8 h-8" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-8 opacity-90">
            Join thousands of users who are already saving time and staying organized.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Now
            </motion.a>
            <Link to="/how-to-use">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                Learn How to Use
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}