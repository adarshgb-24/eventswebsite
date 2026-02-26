import { motion } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    alt: 'Elegant Wedding Reception',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=800&auto=format&fit=crop',
    alt: 'Birthday Party Setup',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
    alt: 'Themed Decoration',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    alt: 'Corporate Event Setup',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    alt: 'Wedding Details',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1522413452208-99690151c270?q=80&w=800&auto=format&fit=crop',
    alt: 'Floral Arrangements',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3"
          >
            Our Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight"
          >
            A Glimpse of <span className="italic text-gold-700">Magic</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Explore our gallery to see the beautiful moments and stunning setups we've created for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group overflow-hidden rounded-2xl ${image.colSpan} ${image.rowSpan}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-serif text-xl tracking-wide px-4 text-center">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full text-sm font-medium border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white transition-all"
          >
            View More on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
