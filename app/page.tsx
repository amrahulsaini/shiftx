'use client';
import { Home, Building2, Car, Package, Plane, Truck, PackageCheck, PackageOpen, Phone, Mail, MapPin, MessageCircle, Shield, Clock, Award, Star, ChevronDown, Menu, X, CheckCircle2, TrendingUp, Users, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { icon: Home, name: "Ghar Shifting", desc: "Safe and efficient home relocation with expert packing" },
    { icon: Building2, name: "Office Shifting", desc: "Professional corporate moving with minimal downtime" },
    { icon: Car, name: "Car/Bike Transport", desc: "Secure vehicle transportation across India" },
    { icon: Package, name: "Storage Facility", desc: "Climate-controlled warehousing solutions" },
    { icon: Plane, name: "International Moving", desc: "Seamless global relocation services" },
    { icon: Truck, name: "Local Shifting", desc: "Quick and affordable city moves" },
    { icon: PackageCheck, name: "Packaging Service", desc: "Professional packing materials and service" },
    { icon: PackageOpen, name: "Unpacking", desc: "Complete unpacking and setup assistance" }
  ];

  const reviews = [
    { name: "Rajesh Kumar", rating: 5, text: "Excellent service! They moved my entire office in just 2 days. Very professional team.", location: "Delhi" },
    { name: "Priya Sharma", rating: 5, text: "Best packers and movers I've ever used. Everything arrived safely. Highly recommended!", location: "Mumbai" },
    { name: "Amit Patel", rating: 5, text: "Great experience with ShiftX. Affordable pricing and careful handling of all items.", location: "Ahmedabad" },
    { name: "Sneha Reddy", rating: 5, text: "They handled my car transport perfectly. No scratches, delivered on time!", location: "Bangalore" }
  ];

  const faqs = [
    { q: "Do you provide door-to-door service?", a: "Yes! We provide complete door-to-door service. You don't need to worry about pick-up or drop-off - our team handles everything from packing at your old location to unpacking at your new place." },
    { q: "What areas do you serve?", a: "We serve PAN India - all states and major cities across India. We also provide international moving services to select countries." },
    { q: "Is insurance included in the package?", a: "We offer comprehensive insurance coverage for your goods during transit. Insurance can be added to any package for complete peace of mind." },
    { q: "How much advance notice do you need?", a: "While we can accommodate urgent moves, we recommend booking at least 3-7 days in advance for the best service and pricing." },
    { q: "What payment methods do you accept?", a: "We accept all major payment methods including cash, UPI, credit/debit cards, and bank transfers. GST invoice provided for all transactions." },
    { q: "Do you provide packing materials?", a: "Yes! We provide all necessary packing materials including boxes, bubble wrap, packing paper, and specialized containers for fragile items." }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: TrendingUp, value: "50+", label: "Cities Covered" },
    { icon: Truck, value: "100+", label: "Vehicles Fleet" },
    { icon: Award, value: "ISO", label: "Certified Company" }
  ];

  return (
    <div className="min-h-screen" style={{background: '#FFFFFF'}}>
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{background: 'rgba(255, 255, 255, 0.98)', borderBottom: '1px solid #000000'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>ShiftX</h1>
              <p className="text-xs md:text-sm" style={{color: '#FF6B35'}}>Your Trusted Moving Partner Since 2018</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="hover:opacity-80 transition font-medium" style={{color: '#000000'}}>About</a>
              <a href="#services" className="hover:opacity-80 transition font-medium" style={{color: '#000000'}}>Services</a>
              <a href="#reviews" className="hover:opacity-80 transition font-medium" style={{color: '#000000'}}>Reviews</a>
              <a href="#faq" className="hover:opacity-80 transition font-medium" style={{color: '#000000'}}>FAQ</a>
              <a href="#contact" className="hover:opacity-80 transition font-medium" style={{color: '#000000'}}>Contact</a>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2" style={{color: '#FF6B35'}}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 animate-fade-in-up">
              <a href="#about" className="block py-2 hover:opacity-80" style={{color: '#000000'}} onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="block py-2 hover:opacity-80" style={{color: '#000000'}} onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#reviews" className="block py-2 hover:opacity-80" style={{color: '#000000'}} onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#faq" className="block py-2 hover:opacity-80" style={{color: '#000000'}} onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="block py-2 hover:opacity-80" style={{color: '#000000'}} onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          )}
        </div>
      </header>

      <section className="text-white py-20 md:py-32 px-4 relative" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/hero.jpeg)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{color: '#FFFFFF', fontFamily: 'var(--font-sora)', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>India's Most Trusted Relocation Partner</h2>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 animate-fade-in-up" style={{color: '#FFFFFF', animationDelay: '0.2s', fontFamily: 'var(--font-sora)', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Seamless, Secure & Stress-Free Moving Solutions Since 2018</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-2 px-6 py-3" style={{background: '#FFFFFF', color: '#000000', border: '2px solid #FF6B35'}}><Award className="w-5 h-5" style={{color: '#FF6B35'}} /><span className="font-medium">ISO Certified</span></div>
            <div className="flex items-center gap-2 px-6 py-3" style={{background: '#FFFFFF', color: '#000000', border: '2px solid #FF6B35'}}><Clock className="w-5 h-5" style={{color: '#FF6B35'}} /><span className="font-medium">24x7 Assistance</span></div>
            <div className="flex items-center gap-2 px-6 py-3" style={{background: '#FFFFFF', color: '#000000', border: '2px solid #FF6B35'}}><Truck className="w-5 h-5" style={{color: '#FF6B35'}} /><span className="font-medium">Pan-India Network</span></div>
            <div className="flex items-center gap-2 px-6 py-3" style={{background: '#FFFFFF', color: '#000000', border: '2px solid #FF6B35'}}><Shield className="w-5 h-5" style={{color: '#FF6B35'}} /><span className="font-medium">100% Insured</span></div>
          </div>
          <a href="#contact" className="inline-block px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 animate-pulse-glow" style={{background: '#FF6B35', color: '#FFFFFF', fontFamily: 'var(--font-sora)'}}>Request Your Free Quote Today</a>
        </div>
      </section>

      <section className="py-16 px-4" style={{background: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-none" style={{border: '1px solid #000000'}}>
                <stat.icon className="w-12 h-12 mx-auto mb-4" style={{color: '#FF6B35'}} />
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>{stat.value}</div>
                <div className="text-sm md:text-base" style={{color: '#333333'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4" style={{background: '#000000'}}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up" style={{color: '#FFFFFF', fontFamily: 'var(--font-sora)'}}>Who We Are</h3>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{color: '#FFFFFF'}}>Your Premier Relocation Partner - Committed to Excellence in Every Move</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 animate-slide-in-left" style={{background: '#FFFFFF', border: '1px solid #FF6B35'}}>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8" style={{color: '#FF6B35'}} />
                <h4 className="text-2xl font-semibold" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Company Overview</h4>
              </div>
              <div className="space-y-4" style={{color: '#333333', fontFamily: 'var(--font-source-sans-3)'}}>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#FF6B35'}} /><div><strong>Company Name:</strong> ShiftX</div></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#FF6B35'}} /><div><strong>Established:</strong> 2018</div></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#FF6B35'}} /><div><strong>Service Area:</strong> PAN India (All States & Major Cities)</div></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#FF6B35'}} /><div><strong>Languages:</strong> English, Hindi & Regional Languages</div></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#FF6B35'}} /><div><strong>Service Type:</strong> Complete Door-to-Door Service (No customer hassle!)</div></div>
              </div>
            </div>
            <div className="p-8 animate-slide-in-right" style={{background: '#FFFFFF', border: '1px solid #FF6B35'}}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8" style={{color: '#FF6B35'}} />
                <h4 className="text-2xl font-semibold" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Certifications & Licenses</h4>
              </div>
              <div className="space-y-4" style={{color: '#333333', fontFamily: 'var(--font-source-sans-3)'}}>
                <div className="flex items-start gap-3"><Shield className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#FF6B35'}} /><div><strong>ISO Certified:</strong> Quality Management System Certified</div></div>
                <div className="flex items-start gap-3"><Shield className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#FF6B35'}} /><div><strong>IBA Approved:</strong> Indian Banks Association Approved</div></div>
                <div className="flex items-start gap-3"><Shield className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#FF6B35'}} /><div><strong>GST Number:</strong> O8HAYPS4373H1ZO</div></div>
                <div className="p-6 mt-6" style={{background: '#000000', color: '#FFFFFF', border: '1px solid #FF6B35'}}>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 mt-1" style={{color: '#FF6B35'}} />
                    <div><p className="text-lg font-bold mb-2" style={{color: '#FFFFFF'}}>💼 Comprehensive Insurance Protection</p><p style={{color: '#FFFFFF'}}>Every shipment is backed by complete insurance coverage, safeguarding your valuable belongings throughout the relocation journey. Your peace of mind is our guarantee.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4" style={{background: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Our Premium Services</h3>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{color: '#333333'}}>End-to-End Relocation Solutions Designed for Your Success</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 text-center transition-transform duration-300 hover:scale-105" style={{background: '#FFFFFF', border: '1px solid #000000', animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-20 h-20 mb-4" style={{background: '#FF6B35'}}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>{service.name}</h4>
                <p className="text-sm" style={{color: '#333333', fontFamily: 'var(--font-source-sans-3)'}}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{background: '#000000'}}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: '#FFFFFF', fontFamily: 'var(--font-sora)'}}>Why Partner With ShiftX?</h3>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{color: '#FFFFFF'}}>Excellence, Reliability & Trust - The ShiftX Promise</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6" style={{background: '#FFFFFF', border: '1px solid #FF6B35'}}><Shield className="w-12 h-12 mb-4" style={{color: '#FF6B35'}} /><h4 className="text-2xl font-bold mb-3" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Complete Insurance Protection</h4><p style={{color: '#333333'}}>Every move is fully insured with comprehensive coverage, protecting your assets from origin to destination with zero compromise.</p></div>
            <div className="p-6" style={{background: '#FFFFFF', border: '1px solid #FF6B35'}}><Clock className="w-12 h-12 mb-4" style={{color: '#FF6B35'}} /><h4 className="text-2xl font-bold mb-3" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>24x7 Dedicated Support</h4><p style={{color: '#333333'}}>Our expert team is available round-the-clock to ensure seamless communication and immediate assistance throughout your relocation.</p></div>
            <div className="p-6" style={{background: '#FFFFFF', border: '1px solid #FF6B35'}}><Award className="w-12 h-12 mb-4" style={{color: '#FF6B35'}} /><h4 className="text-2xl font-bold mb-3" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Certified & Licensed</h4><p style={{color: '#333333'}}>ISO certified and IBA approved with valid GST registration, ensuring the highest standards of service quality and compliance.</p></div>
            <div className="p-6" style={{background: '#FFFFFF', border: '1px solid #FF6B35'}}><Truck className="w-12 h-12 mb-4" style={{color: '#FF6B35'}} /><h4 className="text-2xl font-bold mb-3" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Full-Service Door-to-Door</h4><p style={{color: '#333333'}}>Hassle-free complete door-to-door service with professional packing, loading, transportation, and unpacking at your new location.</p></div>
            <div className="p-6" style={{background: '#FFFFFF', border: '1px solid #FF6B35'}}><TrendingUp className="w-12 h-12 mb-4" style={{color: '#FF6B35'}} /><h4 className="text-2xl font-bold mb-3" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Transparent Pricing</h4><p style={{color: '#333333'}}>Honest, competitive pricing with detailed breakdowns and absolutely no hidden costs - what you see is what you pay.</p></div>
            <div className="p-6" style={{background: '#FFFFFF', border: '1px solid #FF6B35'}}><Users className="w-12 h-12 mb-4" style={{color: '#FF6B35'}} /><h4 className="text-2xl font-bold mb-3" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Expert Team</h4><p style={{color: '#333333'}}>Trained and experienced professionals for safe handling of your belongings.</p></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4" style={{background: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Client Success Stories</h3>
          <p className="text-center text-lg mb-12" style={{color: '#333333'}}>Trusted by Thousands - Read What Our Valued Clients Have to Say</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 transition-shadow" style={{background: '#FFFFFF', border: '1px solid #000000'}}>
                <div className="flex items-center gap-1 mb-4">{[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{color: '#FF6B35'}} />)}</div>
                <p className="mb-4 italic" style={{color: '#333333'}}>"{review.text}"</p>
                <div className="flex items-center gap-2"><ThumbsUp className="w-5 h-5" style={{color: '#FF6B35'}} /><div><p className="font-bold" style={{color: '#000000'}}>{review.name}</p><p className="text-sm" style={{color: '#333333'}}>{review.location}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4" style={{background: '#FFFFFF'}}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Frequently Asked Questions</h3>
          <p className="text-center text-lg mb-12" style={{color: '#333333'}}>Got questions? We've got answers!</p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden" style={{background: '#FFFFFF', border: '1px solid #000000'}}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full p-6 text-left flex items-center justify-between transition">
                  <span className="font-bold text-lg" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} style={{color: '#FF6B35'}} />
                </button>
                {openFaq === index && <div className="px-6 pb-6 animate-fade-in-up" style={{color: '#333333'}}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4" style={{background: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Contact Us</h3>
          <p className="text-center text-lg mb-12" style={{color: '#333333'}}>Get in touch for a free quote and consultation</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="p-6 flex items-start gap-4 transition" style={{background: '#FFFFFF', border: '1px solid #000000'}}><div className="p-3" style={{background: '#FF6B35'}}><Phone className="w-6 h-6 text-white" /></div><div><h4 className="font-bold text-lg mb-1" style={{color: '#000000'}}>Phone Number</h4><p style={{color: '#333333'}}>8829814315</p></div></div>
              <div className="p-6 flex items-start gap-4 transition" style={{background: '#FFFFFF', border: '1px solid #000000'}}><div className="p-3" style={{background: '#000000'}}><MessageCircle className="w-6 h-6 text-white" /></div><div><h4 className="font-bold text-lg mb-1" style={{color: '#000000'}}>WhatsApp</h4><p style={{color: '#333333'}}>8829814315</p></div></div>
              <div className="p-6 flex items-start gap-4 transition" style={{background: '#FFFFFF', border: '1px solid #000000'}}><div className="p-3" style={{background: '#FF6B35'}}><Mail className="w-6 h-6 text-white" /></div><div><h4 className="font-bold text-lg mb-1" style={{color: '#000000'}}>Email</h4><p style={{color: '#333333'}}>easyShiftX@gmail.com</p></div></div>
              <div className="p-6 flex items-start gap-4 transition" style={{background: '#FFFFFF', border: '1px solid #000000'}}><div className="p-3" style={{background: '#000000'}}><MapPin className="w-6 h-6 text-white" /></div><div><h4 className="font-bold text-lg mb-1" style={{color: '#000000'}}>Office Address</h4><p style={{color: '#333333'}}>Jaipur, Rajasthan, India</p></div></div>
            </div>
            <div className="p-8" style={{background: '#FFFFFF', border: '1px solid #000000'}}>
              <h4 className="text-2xl font-bold mb-6" style={{color: '#000000', fontFamily: 'var(--font-sora)'}}>Send Us a Message</h4>
              <form className="space-y-5">
                <div><label className="block mb-2 font-medium" style={{color: '#333333'}}>Your Name *</label><input type="text" placeholder="Enter your full name" className="w-full p-4 border-2 focus:outline-none transition" style={{borderColor: '#000000'}} /></div>
                <div><label className="block mb-2 font-medium" style={{color: '#333333'}}>Email Address *</label><input type="email" placeholder="your.email@example.com" className="w-full p-4 border-2 focus:outline-none transition" style={{borderColor: '#000000'}} /></div>
                <div><label className="block mb-2 font-medium" style={{color: '#333333'}}>Phone Number *</label><input type="tel" placeholder="+91 98765 43210" className="w-full p-4 border-2 focus:outline-none transition" style={{borderColor: '#000000'}} /></div>
                <div><label className="block mb-2 font-medium" style={{color: '#333333'}}>Your Message *</label><textarea placeholder="Tell us about your moving requirements..." rows={5} className="w-full p-4 border-2 focus:outline-none transition" style={{borderColor: '#000000'}}></textarea></div>
                <button type="submit" className="w-full py-4 text-white font-bold text-lg hover:opacity-90 transition" style={{background: '#FF6B35', fontFamily: 'var(--font-sora)'}}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4" style={{background: '#000000', borderTop: '2px solid #FF6B35'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h5 className="text-2xl font-bold mb-4" style={{color: '#FFFFFF', fontFamily: 'var(--font-sora)'}}>ShiftX</h5>
              <p className="text-white text-opacity-80 mb-4">Your trusted partner for seamless relocation across PAN India since 2018. We handle your belongings with care and professionalism.</p>
              <div className="flex gap-4"><Award className="w-6 h-6" style={{color: '#FF6B35'}} /><Shield className="w-6 h-6" style={{color: '#FF6B35'}} /><TrendingUp className="w-6 h-6" style={{color: '#FF6B35'}} /></div>
            </div>
            <div>
              <h6 className="text-lg font-bold mb-4" style={{color: '#FFFFFF', fontFamily: 'var(--font-sora)'}}>Quick Links</h6>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-opacity-100 transition" style={{color: '#FFFFFF', opacity: 0.8}}>About Us</a></li>
                <li><a href="#services" className="hover:text-opacity-100 transition" style={{color: '#FFFFFF', opacity: 0.8}}>Services</a></li>
                <li><a href="#reviews" className="hover:text-opacity-100 transition" style={{color: '#FFFFFF', opacity: 0.8}}>Reviews</a></li>
                <li><a href="#faq" className="hover:text-opacity-100 transition" style={{color: '#FFFFFF', opacity: 0.8}}>FAQ</a></li>
                <li><a href="#contact" className="hover:text-opacity-100 transition" style={{color: '#FFFFFF', opacity: 0.8}}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-bold mb-4" style={{color: '#FFFFFF', fontFamily: 'var(--font-sora)'}}>Legal Info</h6>
              <div className="space-y-2 text-white text-opacity-80 text-sm">
                <p><strong>GST:</strong> O8HAYPS4373H1ZO</p>
                <p><strong>ISO Certified</strong></p>
                <p><strong>IBA Approved</strong></p>
                <p className="pt-2 text-xs">All services subject to terms and conditions</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-20 pt-8 text-center">
            <p className="text-white text-opacity-80 mb-2">&copy; 2018 ShiftX. All rights reserved.</p>
            <p className="text-white text-opacity-60 text-sm"><strong>easyShiftXpackersandmovers.com</strong> | Professional Moving Services PAN India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}




