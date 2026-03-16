import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      location: 'Merewether',
      text: 'Superior Built Carpentry transformed our backyard. The new hardwood deck is absolutely stunning. Their attention to detail and professionalism throughout the entire process was outstanding. Highly recommend!',
    },
    {
      name: 'Mark & Lisa Thompson',
      location: 'Maitland',
      text: 'We hired them to build a covered patio for our outdoor dining area. They were punctual, communicated clearly, and the craftsmanship is top-notch. It has completely changed how we use our home.',
    },
    {
      name: 'David Reynolds',
      location: 'Warners Bay',
      text: 'I needed an old, rotting deck replaced. The team provided a very competitive quote and finished the job ahead of schedule. The new composite deck looks fantastic and feels incredibly solid.',
    },
    {
      name: 'Emma Collins',
      location: 'Cessnock',
      text: 'From the initial consultation to the final cleanup, Superior Built was a pleasure to work with. They built a custom timber privacy screen and seating area that exceeded our expectations.',
    },
  ];

  return (
    <div className="w-full pt-32 pb-16 bg-paper">
      
      {/* Header */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10vw] md:text-[8vw] leading-[0.85] font-serif tracking-tighter uppercase mb-8"
          >
            Client <span className="italic text-wood">Voices.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full h-[1px] bg-ink/10 mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-ink/70 max-w-2xl text-balance"
          >
            Hear what homeowners across Newcastle and the Hunter Valley have to say about our craftsmanship and service.
          </motion.p>
        </div>
      </section>

      {/* Editorial Testimonials */}
      <section className="px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="text-[120px] font-serif text-ink/5 absolute -top-16 -left-8 select-none leading-none">
                  "
                </div>
                <p className="text-2xl md:text-3xl font-serif text-ink leading-snug mb-10 relative z-10">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-6 border-t border-ink/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center text-wood font-serif text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-ink tracking-wide uppercase text-sm">{testimonial.name}</h4>
                    <p className="text-wood text-xs uppercase tracking-widest mt-1">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
