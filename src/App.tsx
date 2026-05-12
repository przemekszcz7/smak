/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Facebook, 
  Phone, 
  MapPin, 
  Clock, 
  UtensilsCrossed, 
  ChefHat, 
  CalendarDays, 
  ChevronRight,
  Star,
  ExternalLink,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const IMAGES_DANIA = [
  "https://i.postimg.cc/9MMVzY8Y/485864538-1052861030194490-5439651827577879029-n.jpg",
  "https://i.postimg.cc/TwwGhJ7q/486255323-1052863966860863-8349335320418174784-n.jpg",
  "https://i.postimg.cc/vZfmdhkf/668053995-1353715956775661-6204548227441560145-n.jpg",
  "https://i.postimg.cc/MpVG85Nf/668404883-1353715970108993-5150098503779214356-n.jpg",
  "https://i.postimg.cc/L8LsMDwq/668433490-1353716030108987-1822217021425010948-n.jpg",
  "https://i.postimg.cc/zGKf176b/668727399-1353716010108989-8079883079182733029-n.jpg",
  "https://i.postimg.cc/x1MdS5hb/668846060-1353716003442323-8542178996028508049-n.jpg",
  "https://i.postimg.cc/RZK0zdyq/670527569-1357562806390976-5297557281590379468-n.jpg",
  "https://i.postimg.cc/nhBLt2gr/671195389-1358279256319331-6673214472222791065-n.jpg",
  "https://i.postimg.cc/wjLBd2Z7/671672082-1358279192986004-5300749059105049749-n.jpg"
];

const IMAGES_SALA = [
  "https://i.postimg.cc/wTSBPZft/484174179-1045752984238628-7454512690469343099-n.jpg",
  "https://i.postimg.cc/44hfkwrv/484820265-1049867590493834-7947076031306949660-n.jpg",
  "https://i.postimg.cc/sgLHr9F6/486614678-1051852233628703-2896972536394342364-n-(1).jpg",
  "https://i.postimg.cc/RFF9qLs7/486169245-1051852420295351-2075800309834205197-n.jpg",
  "https://i.postimg.cc/BZ1S9NdM/485389797-1049867597160500-7230272662217495780-n.jpg",
  "https://i.postimg.cc/rytVXgv9/486364448-1051852210295372-2417889674631922595-n-(1).jpg",
  "https://i.postimg.cc/SQzSFVwr/486320363-1052856713528255-7689752097264823598-n.jpg",
  "https://i.postimg.cc/Pf8XsKBK/486169144-1052856543528272-2136081001008694588-n.jpg",
  "https://i.postimg.cc/mZFLfV06/485945622-1052856873528239-2373044527984880287-n.jpg"
];

const HOURS = [
  { day: "Poniedziałek", time: "10:00 - 16:00" },
  { day: "Wtorek", time: "10:00 - 16:00" },
  { day: "Środa", time: "10:00 - 16:00" },
  { day: "Czwartek", time: "10:00 - 16:00" },
  { day: "Piątek", time: "10:00 - 16:00" },
  { day: "Sobota", time: "10:00 - 15:00" },
  { day: "Niedziela", time: "10:00 - 13:30" }
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Decorative Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-brand-accent blob-shadow rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] bg-brand-primary blob-shadow rounded-full"></div>
        <div className="absolute -bottom-[5%] left-[10%] w-[30%] h-[30%] bg-brand-accent blob-shadow rounded-full"></div>
      </div>

      {/* Floating CTA (Mobile) */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 right-6 z-[60] md:hidden"
      >
        <a 
          href="tel:+48533367624" 
          className="bg-brand-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <Phone />
        </a>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button 
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </motion.button>
            <motion.img 
              layoutId={selectedImage}
              src={selectedImage} 
              alt="Powiększone zdjęcie" 
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-orange-100/50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <motion.img 
              whileHover={{ rotate: 10, scale: 1.1 }}
              src="https://i.postimg.cc/ncMsNvn0/452554934-881646050649323-5499797074451709665-n.jpg" 
              alt="Logo Jadłodajnia SMAK" 
              className="w-12 h-12 rounded-full shadow-lg border-2 border-white"
              id="nav-logo"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-bold text-brand-primary leading-none">Jadłodajnia SMAK</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent mt-0.5">Kuchnia z Sercem</span>
            </div>
          </div>
          <div className="hidden md:flex gap-10 font-bold text-[13px] tracking-widest text-gray-400">
            {['o-nas', 'dania', 'sala', 'kontakt'].map((link) => (
              <a 
                key={link}
                href={`#${link}`} 
                className="hover:text-brand-primary transition-all relative group py-1"
              >
                {link.replace('-', ' ').toUpperCase()}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+48533367624" 
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-xl hover:shadow-brand-primary/20 transition-all group overflow-hidden relative"
            id="nav-call-btn"
          >
            <span className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <Phone size={16} className="relative group-hover:rotate-12 transition-transform" />
            <span className="relative hidden sm:inline font-bold text-sm">Zamów na wynos</span>
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-brand-primary overflow-hidden py-24 md:py-48 min-h-[80vh] flex items-center">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img 
            src={IMAGES_DANIA[0]} 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Poczuj smak <span className="text-brand-accent italic">prawdziwej</span> domowej kuchni
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 opacity-90 max-w-2xl mx-auto">
              Obiady domowe • Posiłki regeneracyjne • Catering • Przyjęcia okolicznościowe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+48533367624" 
                className="bg-brand-accent text-brand-primary font-bold px-8 py-4 rounded-xl text-lg hover:brightness-110 shadow-xl transition-all flex items-center justify-center gap-2"
                id="hero-order-btn"
              >
                Zapraszamy do kontaktu!
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/jadlodajniasmak" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Facebook size={20} />
                Nasz Facebook
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Cards */}
      <section id="o-nas" className="py-32 px-4 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5 hidden lg:block">
          <UtensilsCrossed size={400} />
        </div>
        
        <div className="text-center mb-20 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Nasza Misja
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-brand-primary"
          >
            Gotujemy jak dla siebie
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-10 relative z-10"
        >
          {[
            { icon: <UtensilsCrossed size={32} />, title: "Obiady Domowe", desc: "Codziennie świeże, aromatyczne dania przygotowywane według tradycyjnych receptur. Smak jak u mamy!", color: "bg-orange-100" },
            { icon: <ChefHat size={32} />, title: "Catering & Eventy", desc: "Profesjonalna obsługa Twoich przyjęć. Dostarczamy smakowite dania na każdą okazję, zarówno firmową jak i rodzinną.", color: "bg-stone-200" },
            { icon: <CalendarDays size={32} />, title: "Przyjęcia", desc: "Nasza sala bankietowa to idealne miejsce na Twoje wyjątkowe chwile. Zadbamy o każdy detal Twojej uroczystości.", color: "bg-orange-100" }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -15, rotate: idx % 2 === 0 ? 1 : -1 }}
              className="bg-white/80 backdrop-blur-sm p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(139,69,19,0.05)] border border-white text-center hover:shadow-2xl transition-all duration-500 group"
            >
              <div className={`${service.color} w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-brand-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-inner`}>
                {service.icon}
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-brand-primary leading-tight">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gallery Dania */}
      <section id="dania" className="py-32 bg-stone-100/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-bg to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-xl">
              <span className="text-brand-accent uppercase tracking-[0.3em] font-bold text-xs block mb-4">Nasza Kuchnia</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-brand-primary leading-tight">Dania pełne smaku</h2>
            </div>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed border-l-2 border-brand-accent/30 pl-6">
              Odkryj galerię naszych codziennych potraw. Każde danie tworzymy z pasją i najlepszych lokalnych składników.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          >
            {IMAGES_DANIA.map((img, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="relative group overflow-hidden rounded-[2rem] cursor-zoom-in shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white text-xs font-bold border-2 border-white/50 px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform tracking-widest">ZOBACZ WIĘCEJ</span>
                </div>
                <motion.img 
                  layoutId={img}
                  src={img} 
                  alt={`Danie ${idx + 1}`} 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  id={`img-dania-${idx}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Sala */}
      <section id="sala" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse justify-between items-end mb-20 gap-8 text-right"
          >
            <div className="max-w-xl">
              <span className="text-brand-accent uppercase tracking-[0.3em] font-bold text-xs block mb-4">Twój Event</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-brand-primary leading-tight">Sala Bankietowa</h2>
            </div>
            <p className="text-gray-500 max-w-sm text-left md:text-right text-lg leading-relaxed border-r-2 border-brand-accent/30 pr-6">
              Organizujemy wesela, chrzciny, komunie, urodziny i spotkania firmowe w eleganckiej oprawie.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {IMAGES_SALA.map((img, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`overflow-hidden rounded-[2rem] cursor-zoom-in relative group shadow-lg hover:shadow-2xl transition-all duration-500 ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white text-xs font-bold border-2 border-white/50 px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform tracking-widest uppercase">Powiększ</span>
                </div>
                <motion.img 
                  layoutId={img}
                  src={img} 
                  alt={`Sala ${idx + 1}`} 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  id={`img-sala-${idx}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feedback / Review Button Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center border-2 border-dashed border-brand-accent/30 rounded-[3rem] p-12 bg-gradient-to-br from-brand-bg to-white shadow-brand-accent/5 shadow-2xl"
        >
          <div className="flex justify-center gap-2 mb-6">
            {[1,2,3,4,5].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: -45 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Star className="fill-brand-accent text-brand-accent" size={28} />
              </motion.div>
            ))}
          </div>
          <h2 className="font-display text-4xl font-bold mb-6 italic">Doceniają nas nasi Goście</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed italic font-display">
            "Najlepsze domowe jedzenie w Myszkowie! Porcje duże, obsługa przemiła, a smak... po prostu jak w domu."
          </p>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            href="https://www.facebook.com/jadlodajniasmak/reviews/?id=100064118073823&sk=reviews" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand-primary font-bold text-lg hover:text-brand-accent transition-colors"
          >
            Sprawdź opinie na Facebooku <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </section>

      {/* Information Section */}
      <section id="kontakt" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs block mb-6">Kontakt z nami</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-brand-primary mb-12 leading-tight">Zasmakuj <br/>Tradycji</h2>
            
            <div className="space-y-12 mb-16">
              {[
                { icon: <MapPin size={24} />, title: "Lokalizacja", content: "ul. Kościuszki 25, 42-300 Myszków" },
                { icon: <Phone size={24} />, title: "Zamówienia", content: "+48 533 367 624", link: "tel:+48533367624" },
                { icon: <Clock size={24} />, title: "Godziny otwarcia", isHours: true }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="bg-brand-primary text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-brand-accent transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brand-accent uppercase tracking-widest text-[10px] mb-2">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-2xl md:text-3xl font-bold text-brand-primary hover:text-brand-accent transition-colors block">
                        {item.content}
                      </a>
                    ) : item.isHours ? (
                      <div className="grid gap-3 max-w-sm mt-4">
                        {HOURS.map((h, i) => (
                          <div key={i} className="flex justify-between items-center text-sm border-b border-brand-primary/5 pb-2">
                            <span className="text-gray-400 font-medium">{h.day}</span>
                            <span className="font-bold text-brand-primary">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-2xl md:text-3xl font-bold text-brand-primary leading-tight">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.facebook.com/jadlodajniasmak" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#1877F2] text-white p-8 rounded-[2.5rem] flex items-center justify-between group shadow-2xl hover:shadow-[#1877F2]/40 transition-all overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="bg-white p-3 rounded-xl text-[#1877F2]">
                  <Facebook size={32} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] opacity-70 uppercase font-bold tracking-widest">Nasza Społeczność</p>
                  <p className="text-3xl font-bold tracking-tight">Facebook</p>
                </div>
              </div>
              <ChevronRight className="group-hover:translate-x-2 transition-transform relative z-10" size={32} />
            </motion.a>
          </motion.div>

          {/* Map Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[600px] lg:h-[800px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(139,69,19,0.15)] border-[16px] border-white relative z-0"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.848991345587!2d19.322571777035126!3d50.57417157844728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47173aaa647307df%3A0xec56cfa49e04149d!2sTadeusza%20Ko%C5%9Bciuszki%2025%2C%2042-300%20Myszk%C3%B3w!5e0!3m2!1spl!2spl!4v1778563534204!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Jadłodajnia SMAK"
              id="google-map"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-32 px-4 overflow-hidden relative">
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-accent/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="font-display text-5xl font-bold mb-8 tracking-tight text-white/90">Jadłodajnia SMAK</h2>
            <p className="text-xl opacity-50 leading-relaxed mb-12 max-w-md font-light">
              Zapraszamy na domowe obiady przygotowywane z pasją. Tradycyjne smaki, które łączą pokolenia w samym sercu Myszkowa.
            </p>
            <div className="flex gap-6">
              <motion.a 
                whileHover={{ y: -5, scale: 1.05 }}
                href="https://www.facebook.com/jadlodajniasmak" 
                className="w-16 h-16 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center hover:bg-brand-accent transition-all shadow-2xl group"
              >
                <Facebook size={32} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-accent uppercase tracking-widest text-[10px] mb-8">Menu Serwisu</h4>
            <ul className="space-y-4 text-lg">
              {['o-nas', 'dania', 'sala', 'kontakt'].map(link => (
                <li key={link}>
                  <a href={`#${link}`} className="opacity-60 hover:opacity-100 transition-all hover:text-brand-accent hover:pl-2">
                    {link.replace('-', ' ').toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-accent uppercase tracking-widest text-[10px] mb-8">Zapraszamy</h4>
            <p className="text-xl font-bold mb-2">ul. Kościuszki 25</p>
            <p className="text-xl font-bold mb-8 opacity-60">42-300 Myszków</p>
            <a href="tel:+48533367624" className="text-2xl font-bold text-brand-accent hover:underline decoration-brand-accent/30 underline-offset-8">
              +48 533 367 624
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 text-[10px] font-bold tracking-[0.3em] uppercase">
          <p>© {new Date().getFullYear()} JADŁODAJNIA SMAK</p>
          <div className="flex items-center gap-2">
            <span>KUCHNI Z SERCEM</span>
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
            <span>MYSZKÓW</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
