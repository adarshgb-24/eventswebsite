import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                alt="Event Setup"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 font-serif text-2xl font-bold">
                  10+
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Years of Experience</p>
                  <p className="text-xs text-gray-500">in creating magic</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                Crafting Memories <br />
                <span className="italic text-gold-700">With a Personal Touch</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6 text-gray-600 leading-relaxed"
            >
              <p>
                At <strong>Ansh Events</strong>, we believe that every celebration is a unique story waiting to be told. Based in Hubli, Karnataka, we specialize in transforming your visions into breathtaking realities.
              </p>
              <p>
                With years of expertise in wedding planning, birthday decorations, and corporate events, our team brings creativity, precision, and passion to every project. We don't just plan events; we curate experiences that linger in your memories forever.
              </p>
              <p>
                From the grandest weddings to the most intimate birthday gatherings, our commitment to excellence ensures that your special day is seamless, stress-free, and spectacularly yours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-6 border-t border-gold-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
                  alt="Founder"
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-300"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-serif text-xl text-gray-900 font-medium">Ansh</p>
                  <p className="text-sm text-gold-600 uppercase tracking-wider">Founder & Lead Planner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
