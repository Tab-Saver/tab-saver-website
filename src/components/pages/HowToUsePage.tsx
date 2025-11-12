import { motion } from 'motion/react';
import { Download, FolderOpen, RotateCcw, Tag, Sparkles, Search, BookmarkPlus } from 'lucide-react';

export default function HowToUsePage() {
  const mainSteps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Install Tab Saver',
      description: 'Add the extension to your browser from the Chrome Web Store.',
      details: [
        'Click "Add to Chrome" on the extension page',
        'Pin Tab Saver to your toolbar for quick access',
        'You\'re ready to start saving tabs!',
      ],
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      title: 'Save Your Tabs',
      description: 'Click the Tab Saver icon and save all open tabs with one click.',
      details: [
        'Click the Tab Saver icon in your toolbar',
        'Give your session a descriptive name',
        'All your current tabs are saved instantly',
      ],
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Restore & Manage',
      description: 'Access your saved sessions anytime and restore them with one click.',
      details: [
        'Open Tab Saver to see all saved sessions',
        'Click any session to restore all its tabs',
        'Edit, delete, or organize sessions as needed',
      ],
    },
  ];

  const advancedFeatures = [
    {
      icon: <Tag className="w-6 h-6" />,
      title: 'Tags & Organization',
      description: 'Add custom tags to categorize your sessions (e.g., "work", "research", "shopping")',
    },
    {
      icon: <BookmarkPlus className="w-6 h-6" />,
      title: 'Notes & Context',
      description: 'Attach notes to sessions to remember why you saved them',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI Summaries',
      description: 'Enable Smart Summarize to get AI-powered summaries of saved pages',
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Quick Search',
      description: 'Search through your sessions by name, tags, or notes',
    },
  ];

  const tips = [
    {
      title: 'Use Descriptive Names',
      description: 'Name sessions clearly: "Project X Research - Nov 2024" instead of just "Research"',
    },
    {
      title: 'Tag Consistently',
      description: 'Create a tagging system early and stick to it for better organization',
    },
    {
      title: 'Regular Cleanup',
      description: 'Review and delete old sessions monthly to keep things organized',
    },
    {
      title: 'Pin Important Sessions',
      description: 'Keep frequently used sessions at the top for quick access',
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
          <h1 className="text-gray-900 mb-4">How to Use Tab Saver</h1>
          <p className="text-gray-600">
            Get started in 3 simple steps
          </p>
        </motion.div>

        {/* Main Steps */}
        <div className="space-y-8 mb-20">
          {mainSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                  {index < mainSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-blue-200 to-blue-300 mx-auto mt-4" />
                  )}
                </div>

                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-blue-600">Step {index + 1}</span>
                  </div>
                  <h2 className="text-gray-900 mb-3">{step.title}</h2>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        </div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-gray-900 mb-8 text-center">Advanced Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-gray-900 mb-8 text-center">Pro Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <h3 className="text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Ready to get started?</p>
          <a
            href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Download Tab Saver Now
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}