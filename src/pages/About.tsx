import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
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
            Our <span className="italic text-wood">Story.</span>
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
            Crafting premium outdoor living spaces for homeowners in Newcastle & the Hunter Valley since 2014.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="text-xs uppercase tracking-[0.2em] text-wood mb-8">The Foundation</h2>
            <div className="space-y-8 text-ink/80 text-lg leading-relaxed font-light">
              <p>
                Superior Built Carpentry was founded with a singular vision: to elevate the standard of outdoor living through uncompromising craftsmanship and architectural integrity.
              </p>
              <p>
                Based in the heart of the Hunter Valley, we understand the Australian lifestyle. We know that a deck isn't just timber—it's the stage for family gatherings, quiet mornings, and summer evenings.
              </p>
              <p>
                With over a decade of specialized experience, our team of licensed carpenters brings passion, precision, and professionalism to every project, ensuring your investment stands the test of time.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-ink/10 pt-12">
              <div>
                <h4 className="text-5xl font-serif text-ink tracking-tighter mb-2">10<span className="text-wood">+</span></h4>
                <p className="text-xs uppercase tracking-widest text-ink/50">Years Experience</p>
              </div>
              <div>
                <h4 className="text-5xl font-serif text-ink tracking-tighter mb-2">100<span className="text-wood">%</span></h4>
                <p className="text-xs uppercase tracking-widest text-ink/50">Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div 
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img 
                src="https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/555022666_17972376338943403_1822868195975257201_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzczMjMxODk3NDkwMjg2MjI4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOC5oZHIuQzMifQ%3D%3D&_nc_ohc=rTEcsdQANdAQ7kNvwHChYFt&_nc_oc=Adner5U2PTTks6tp3fSrj2QZkxf92kgKz17zs-L57IbRhyfaR87yklCmgJwQhsFdZNc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_Afx2uIc2HSrXUt-NdfCR3qkAux6Ej_z86TOa9KRVvBCSrQ&oe=69BDE3EA" 
                alt="Carpenter working" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 lg:px-12 bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mb-6">Our Core <span className="italic text-wood">Values</span></h2>
            <p className="text-paper/60 text-xl font-light max-w-2xl">
              We don't just build decks; we build trust. Our principles guide every cut of timber and every client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 border-t border-paper/10 pt-16">
            {[
              { num: '01', title: 'Precision', desc: 'We never cut corners. Every joint, screw, and finish is executed with meticulous care to ensure structural longevity and visual perfection.' },
              { num: '02', title: 'Transparency', desc: 'From the initial quote to the final walkthrough, we keep you informed. Clear timelines, honest pricing, and no hidden surprises.' },
              { num: '03', title: 'Respect', desc: 'We treat your property as if it were our own, maintaining a clean, safe workspace and minimizing disruption to your daily life.' },
            ].map((value, idx) => (
              <div key={idx}>
                <span className="text-sm font-mono text-wood mb-6 block">{value.num}</span>
                <h3 className="text-2xl font-serif mb-6">{value.title}</h3>
                <p className="text-paper/60 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
