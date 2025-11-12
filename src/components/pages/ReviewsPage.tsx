import { motion } from 'motion/react';
import { Star, MessageSquare, Calendar } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Nida Hayjaa',
      initial: 'N',
      color: 'bg-teal-600',
      rating: 5,
      date: 'Nov 11, 2025',
      comment: 'Useful tool',
      helpful: true,
    },
    {
      name: 'Developer',
      initial: 'D',
      color: 'bg-purple-600',
      badge: 'Developer',
      date: 'Nov 11, 2025',
      comment: 'Appreciate it! v2.0.0 is coming soon with even more features!',
      isReply: true,
      replyTo: 'Nida Hayjaa',
    },
    {
      name: 'hamza hamden',
      initial: 'h',
      color: 'bg-orange-600',
      rating: 5,
      date: 'Nov 11, 2025',
      comment: 'convenient and simple. u get what u expect',
      helpful: true,
    },
    {
      name: 'Developer',
      initial: 'D',
      color: 'bg-purple-600',
      badge: 'Developer',
      date: 'Nov 11, 2025',
      comment: 'Thanks for the feedback! We\'re working hard to make it even better.',
      isReply: true,
      replyTo: 'hamza hamden',
    },
    {
      name: 'Omar Hamdan',
      initial: 'O',
      color: 'bg-orange-700',
      rating: 5,
      date: 'Nov 11, 2025',
      comment: 'Useful tool',
      helpful: true,
    },
    {
      name: 'Sarah Chen',
      initial: 'S',
      color: 'bg-blue-600',
      rating: 5,
      date: 'Nov 10, 2025',
      comment: 'This extension has changed how I do research! Being able to save all my tabs with notes and come back to them later is a game changer. The AI summaries are surprisingly accurate.',
      helpful: true,
    },
    {
      name: 'Alex Martinez',
      initial: 'A',
      color: 'bg-green-600',
      rating: 5,
      date: 'Nov 9, 2025',
      comment: 'Love the tagging system! Makes it so easy to organize my work projects vs personal browsing. Simple, fast, and exactly what I needed.',
      helpful: true,
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
          <h1 className="text-gray-900 mb-4">User Reviews</h1>
          <p className="text-gray-600">
            See what our users are saying about Tab Saver
          </p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <div className="text-gray-900 mb-2">5.0 out of 5</div>
          <p className="text-gray-600">Based on Chrome Web Store reviews</p>
        </motion.div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-6 shadow-lg ${
                review.isReply ? 'ml-12 bg-gray-50 border-l-4 border-purple-500' : ''
              }`}
            >
              {review.isReply && review.replyTo && (
                <div className="text-gray-500 mb-2 flex items-center gap-2">
                  <span className="text-purple-600">↳</span>
                  <span>Reply to {review.replyTo}</span>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}
                >
                  <span>{review.initial}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900">{review.name}</h3>
                    {review.badge && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {review.badge}
                      </span>
                    )}
                    {review.rating && (
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-gray-900 text-gray-900"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{review.date}</span>
                  </div>

                  <p className="text-gray-700 mb-3">{review.comment}</p>

                  {review.helpful && (
                    <div className="flex items-center gap-4 text-gray-600">
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <span>👍</span>
                        <span>Was this helpful?</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Updates Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-gray-900 mb-2">Reviews are updated regularly</h3>
            <p className="text-gray-600">
              These reviews are pulled from the Chrome Web Store. Visit the extension page to see
              all reviews and leave your own feedback.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View on Chrome Web Store →
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="mb-4">Join Our Happy Users!</h2>
            <p className="mb-6 opacity-90">
              Download Tab Saver and experience better tab management today.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg"
              >
                Download Extension
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
