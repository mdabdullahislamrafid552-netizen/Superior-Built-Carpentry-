import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';

export default function Services() {
  const services = [
    {
      id: '01',
      title: 'Deck Construction',
      desc: 'We design and build custom timber and composite decks that seamlessly extend your living space outdoors. From durable hardwood to low-maintenance composite materials, we ensure a flawless finish.',
      benefits: ['Increases property value', 'Creates a perfect entertainment area', 'Durable and weather-resistant materials'],
      img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/539555788_17968709993943403_8243001965215168929_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=MzcwOTQ2OTI0NTMyMDYwODk0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOC5oZHIuQzMifQ%3D%3D&_nc_ohc=sp7a8W4avQEQ7kNvwEqPMxi&_nc_oc=AdnJ0lq0PmDELWI-YR9z_yySRm72LUsDxWH3LHTb9HRerDUHsAQu5OkZkldlRFnLm3M&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_AfyaL7_xkmUh--a0ULPJEHwQVO1gg19fWLoXcTjFhwzArw&oe=69BDDDFC',
    },
    {
      id: '02',
      title: 'Patio Installation',
      desc: 'Transform your backyard with a custom-designed patio. Whether you prefer an open-air space or a covered retreat, we build patios that offer year-round comfort and style.',
      benefits: ['Protection from the elements', 'Customizable to your home architecture', 'Seamless indoor-outdoor flow'],
      img: 'https://media.istockphoto.com/id/1071683586/photo/laying-a-patio-in-slate.jpg?s=612x612&w=0&k=20&c=BgE0Z67dvp4E9fKXG_S6QBcbId-YtnqBVik8ir7TH-M=',
    },
    {
      id: '03',
      title: 'Outdoor Living Area',
      desc: 'Complete outdoor transformations. We incorporate seating, fire pits, outdoor kitchens, and pergolas to create the ultimate backyard oasis for your family and friends.',
      benefits: ['Maximizes usable outdoor space', 'Tailored to your lifestyle', 'High-end luxury finish'],
      img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.71878-15/549768779_24352454277781109_3076615928688441975_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzcyMzY1NDAwMTk2NDE2NzcyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgzNjAuc2RyLkMzIn0%3D&_nc_ohc=euqhjTJLV4AQ7kNvwFCx0sn&_nc_oc=AdlMqgkwb4MZ6-14SLtEvoiRJ7gqW-iHHmi2zsHArxrhA_2SXImFtUsiAxluxsPSuKI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_AfwyJkBnb9c4grQYd76gB2UELIraWVi71kF2Qnzw9Iy8Aw&oe=69BDF0B6',
    },
    {
      id: '04',
      title: 'Custom Timber Structures',
      desc: 'Bespoke carpentry solutions including privacy screens, custom seating, gazebos, and architectural timber features that add character and functionality to your property.',
      benefits: ['Unique, custom designs', 'Enhances privacy and aesthetics', 'Built with premium timber'],
      img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.29350-15/472816486_944570797348864_3934508320506806151_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzUzOTQ3OTc0MzQ1NDY5ODY5Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=dHMaXnAu7SMQ7kNvwGj47A1&_nc_oc=AdmZP1N4veK0DnLKHGKlM8d9TErXey3NPmEEYvIvCDnck_3NMOvQxUFdG_GRXk5o3A0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_Afzu9iESRdaXceK8cOiJsFbo6DVuIAnRJ8ecJmSvJ_ZvEw&oe=69BDE91D',
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
            Our <span className="italic text-wood">Expertise.</span>
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
            Specialized carpentry and construction services designed to elevate your home's exterior and expand your living space.
          </motion.p>
        </div>
      </section>

      {/* Services Editorial List */}
      <section className="px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center mb-32`}
            >
              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ clipPath: idx % 2 === 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  className="aspect-[4/5] overflow-hidden rounded-sm relative group"
                >
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 text-paper text-sm font-mono bg-ink/40 backdrop-blur-md px-3 py-1 rounded-full">
                    {service.id}
                  </div>
                </motion.div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8 tracking-tighter">{service.title}</h2>
                <p className="text-ink/70 font-light leading-relaxed mb-10 text-lg">
                  {service.desc}
                </p>
                
                <h3 className="text-xs uppercase tracking-[0.2em] text-wood mb-6">Benefits</h3>
                <ul className="space-y-4 mb-12 border-l border-ink/10 pl-6">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="text-ink/80 font-light">
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="inline-block border-b border-ink pb-1 text-sm uppercase tracking-widest hover:text-wood hover:border-wood transition-colors"
                >
                  Inquire About This Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-32 bg-ink text-paper mt-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter">Not sure what you need?</h2>
          <p className="text-paper/60 mb-12 text-xl font-light max-w-2xl mx-auto text-balance">
            We offer free on-site consultations to discuss your ideas, assess your space, and provide expert recommendations tailored to your home.
          </p>
          <MagneticButton>
            <Link 
              to="/contact" 
              className="inline-block border border-paper/30 hover:bg-paper hover:text-ink px-10 py-5 text-sm uppercase tracking-widest transition-all duration-300 rounded-full cursor-hover"
            >
              Book a Consultation
            </Link>
          </MagneticButton>
        </div>
      </section>

    </div>
  );
}
