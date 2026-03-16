import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import MagneticButton from '../components/MagneticButton';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col justify-end pb-12 px-6 lg:px-12 overflow-hidden bg-ink text-paper">
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0 z-0"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" 
            alt="Luxury wooden deck" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ink/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80"></div>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <h1 className="text-[16vw] md:text-[12vw] leading-[0.8] font-serif tracking-tighter uppercase flex flex-col">
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
                className="block"
              >
                Superior
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.6 }}
                className="block italic text-wood font-light"
              >
                Built.
              </motion.span>
            </div>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2 }}
            className="max-w-sm md:text-right pb-2 md:pb-6 flex flex-col items-start md:items-end"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-wood mb-4">Est. 2014</p>
            <p className="text-lg font-light text-balance text-paper/90 mb-8">
              Mastering the art of outdoor living. Precision-crafted decks and patios for the modern Australian home.
            </p>
            <MagneticButton>
              <Link 
                to="/contact" 
                className="inline-block bg-paper text-ink hover:bg-wood hover:text-paper px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 rounded-full font-medium cursor-hover"
              >
                Request a Quote
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 hidden md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50 rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-16 bg-paper/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-wood"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Statement */}
      <section className="py-32 px-6 lg:px-12 bg-paper relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[200%] -translate-y-1/2 -z-10 opacity-5 pointer-events-none">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[20vw] font-serif whitespace-nowrap uppercase tracking-tighter"
          >
            SUPERIOR BUILT CARPENTRY SUPERIOR BUILT CARPENTRY
          </motion.div>
        </div>
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] tracking-tight text-ink"
          >
            We transform ordinary backyards into <span className="italic text-wood">extraordinary retreats</span>, blending architectural elegance with enduring craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* Services Editorial List */}
      <section className="py-24 px-6 lg:px-12 bg-paper border-t border-ink/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <h2 className="text-xs uppercase tracking-[0.2em] text-ink/50 mb-4 md:mb-0">Our Expertise</h2>
            <p className="max-w-md text-lg font-light text-ink/80">
              Specialized carpentry services designed to elevate your home's exterior and expand your living space.
            </p>
          </div>

          <div className="flex flex-col">
            {[
              { num: '01', title: 'Deck Construction', desc: 'Custom timber and composite decks built to the highest structural and aesthetic standards.' },
              { num: '02', title: 'Patio Building', desc: 'Covered and open patios designed for year-round entertainment and seamless indoor-outdoor flow.' },
              { num: '03', title: 'Outdoor Living', desc: 'Complete outdoor transformations including seating, fire pits, and pergolas.' },
              { num: '04', title: 'Custom Carpentry', desc: 'Bespoke timber features, privacy screens, and architectural timber work.' },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-ink/10 py-10 flex flex-col md:flex-row items-baseline gap-6 md:gap-12 hover:bg-ink hover:text-paper transition-colors duration-500 px-6 -mx-6 rounded-lg"
              >
                <span className="text-sm font-mono text-wood group-hover:text-wood-light transition-colors">{service.num}</span>
                <h3 className="text-4xl md:text-6xl font-serif tracking-tighter flex-shrink-0">{service.title}</h3>
                <p className="font-light text-ink/60 group-hover:text-paper/60 transition-colors md:ml-auto max-w-sm text-sm md:text-base">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Image / Why Us */}
      <section className="py-32 px-6 lg:px-12 bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              src="https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/604369735_17981916893943403_2700275317035853611_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc5Njc5MjA3NjQyMDExOTE5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=qIXoNS3fHXIQ7kNvwHPYLwy&_nc_oc=AdmktJ7X55m3gQCzqZWLy6DR7jwlCY0qWe3pDyXtRpsEXmpKz57LWsOF3QwtO37yT6I&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=rHTIUbZoDj4CDNEw1HLyiA&_nc_ss=8&oh=00_AfxikEGTc6EdhaY4UBc0zvVslfoWYxKGuWTJcc9D3l-e-A&oe=69BDE979" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-xs uppercase tracking-[0.2em] text-wood mb-8">The Superior Difference</h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-10">
              Uncompromising <br/><span className="italic text-paper/60">Quality.</span>
            </h3>
            
            <div className="space-y-10">
              {[
                { title: 'Premium Materials', desc: 'We source only the finest timber and composite materials, ensuring your investment withstands the harsh Australian climate.' },
                { title: 'Master Craftsmanship', desc: 'Every joint, screw, and finish is executed with meticulous attention to detail by our licensed professionals.' },
                { title: 'End-to-End Service', desc: 'From initial design consultation to final polish, we handle every aspect of the build with transparency and care.' },
                { title: 'Custom Design Solutions', desc: 'We tailor every project to your specific lifestyle, aesthetic preferences, and architectural requirements.' },
                { title: 'Guaranteed Satisfaction', desc: 'Our commitment to excellence means we don\'t consider a job finished until you are completely thrilled with the result.' }
              ].map((item, idx) => (
                <div key={idx} className="border-l border-wood pl-6">
                  <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                  <p className="text-paper/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Masonry/Editorial */}
      <section className="py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter">Selected <span className="italic text-wood">Works</span></h2>
            <MagneticButton>
              <Link to="/gallery" className="hidden md:inline-block border-b border-ink pb-1 text-sm uppercase tracking-widest hover:text-wood hover:border-wood transition-colors cursor-hover">
                View All Projects
              </Link>
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Project 1 - Large */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8 group cursor-pointer"
            >
              <motion.div 
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="aspect-[16/10] overflow-hidden mb-6 rounded-sm"
              >
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" 
                  alt="Modern Hardwood Deck" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1">Merewether Residence</h3>
                  <p className="text-ink/60 font-light">Hardwood Decking & Privacy Screen</p>
                </div>
                <span className="text-xs font-mono text-wood">2025</span>
              </div>
            </motion.div>

            {/* Project 2 - Tall */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-4 group cursor-pointer mt-12 md:mt-32"
            >
              <motion.div 
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="aspect-[3/4] overflow-hidden mb-6 rounded-sm"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                  alt="Covered Patio" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1">Maitland Estate</h3>
                  <p className="text-ink/60 font-light">Covered Entertainment Area</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 md:hidden">
            <Link to="/gallery" className="inline-block border-b border-ink pb-1 text-sm uppercase tracking-widest hover:text-wood hover:border-wood transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
