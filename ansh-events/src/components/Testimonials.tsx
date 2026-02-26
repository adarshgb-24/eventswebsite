import { motion } from 'motion/react';
import { Quote, Star, Share2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Soumya Kudagi',
    role: 'Client',
    content: 'I literally went to them with less than 24hrs for the event to start. They did a fabulous job with the decoration and put the entire setup very well. They are extremely professional, they understand your needs very well and execute once we are completely convinced. Also they are way better on pricing compared to their counterparts in Hubli. So just trust me and choose them. They will do a fab job.',
    image: 'https://ui-avatars.com/api/?name=Soumya+Kudagi&background=f5e2c7&color=8d4a2d',
    eventImage: 'https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Jeevan Kumar',
    role: 'Local Guide',
    content: 'The decorations were absolutely beautiful and perfectly matched the theme we had in mind. Every detail was handled with creativity and precision. The decorator was professional, punctual, and very accommodating to our last-minute ideas. Our guests kept complimenting how elegant and well-coordinated everything looked. I truly appreciate the effort and dedication that went into making our event so special. Highly recommended for anyone looking for classy, tasteful, and stress-free decoration services!',
    image: 'https://ui-avatars.com/api/?name=Jeevan+Kumar&background=f5e2c7&color=8d4a2d',
    eventImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Vadiraj Dwarapalak',
    role: 'Local Guide',
    content: 'I recently had the pleasure of working with Ansh Events, and they truly exceeded all expectations. The decor was absolutely stunning—elegant, thoughtful, and perfectly tailored to the theme. They didn\'t just set up a venue; they transformed it into a magical space where every detail felt special and beautifully curated. What impressed me most was their warmth, professionalism, and genuine dedication. Highly recommended! 🌟✨',
    image: 'https://ui-avatars.com/api/?name=Vadiraj+Dwarapalak&background=f5e2c7&color=8d4a2d',
    eventImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const handleShare = async (testimonial: typeof testimonials[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Testimonial from ${testimonial.name} - Ansh Events`,
          text: `"${testimonial.content}" - ${testimonial.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`"${testimonial.content}" - ${testimonial.name}\n\n${window.location.href}`);
        alert('Testimonial copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pastel-pink rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3"
          >
            Client Stories
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight"
          >
            Words of <span className="italic text-gold-700">Appreciation</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 relative overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={testimonial.eventImage} 
                  alt="Event decoration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-200 opacity-50" />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-lg leading-tight">{testimonial.name}</h4>
                    <p className="text-xs text-gold-600 mt-1">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic text-sm flex-1 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => handleShare(testimonial)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold-600 transition-colors"
                    aria-label="Share testimonial"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
