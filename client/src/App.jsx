import React, { useState } from 'react';
import './App.css'; // Importamos los estilos nuevos

const App = () => {
  const [copied, setCopied] = useState(false);

  const contact = {
    name: "Marcos Ponce",
    email: "marcosponce1986@gmail.com",
    phone: "+54 261 2308202",
    whatsapp: "542612308202", 
    linkedin: "https://www.linkedin.com/in/marcos-ponce-30a86616a/",
  };

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hiring Inquiry - IT Support Analyst");
    const body = encodeURIComponent("Hi Marcos, I saw your portfolio and would like to discuss a job opportunity.");
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const tech = [
    { n: "Microsoft 365 Admin", i: "Ⓜ️" },
    { n: "Active Directory / GPO", i: "🛡️" },
    { n: "Azure / Entra ID", i: "☁️" },
    { n: "Intune / Autopilot", i: "📱" },
    { n: "Citrix / VDI Specialist", i: "🖥️" },
    { n: "ServiceNow / Halo ITSM", i: "⚙️" },
    { n: "iManage / LexisOne", i: "📂" },
    { n: "NinjaOne / Remote Access", i: "🔗" },
    { n: "Cybersecurity Basics", i: "🛡️" },
    { n: "Hardware Diagnostics", i: "🔧" },
    { n: "VoIP & Teams Admin", i: "📞" },
    { n: "SLA & Ticket Mgmt", i: "🎫" },
    { n: "Cloud Backup Ops", i: "💾" },
    { n: "PowerShell Automation", i: "📜" },
    { n: "Advanced Networking", i: "🌐" }
  ];

  return (
    <div style={{ color: '#f3f4f6', lineHeight: '1.6', margin: 0 }}>
      
      {/* NAVBAR */}
      <nav style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1f2937', position: 'sticky', top: 0, background: 'rgba(3, 7, 18, 0.8)', backdropFilter: 'blur(12px)', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', position: 'relative' }}>
          <div style={{ position: 'relative', width: '56px', height: '56px' }}>
            <img 
              src="/profile.jpg" 
              alt="Marcos" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid #3b82f6' }} 
            />
            {/* PUNTO VERDE ONLINE */}
            <div className="online-dot"></div>
          </div>
          <span style={{ fontWeight: '800', fontSize: '1.2rem', color: '#fff' }}>{contact.name.toUpperCase()}</span>
        </div>
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>LINKEDIN</a>
          <button 
            onClick={handleHireMe}
            style={{ background: copied ? '#10b981' : '#3b82f6', color: '#fff', padding: '12px 24px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '700', transition: '0.3s' }}
          >
            {copied ? 'EMAIL COPIED!' : 'HIRE ME'}
          </button>
        </div>
      </nav>

      {/* HERO SECTION DARK */}
      <header className="hero-gradient" style={{ padding: '120px 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#1e293b', color: '#60a5fa', border: '1px solid #334155', padding: '8px 20px', borderRadius: '30px', fontSize: '0.8rem', fontWeight: '800', marginBottom: '32px', letterSpacing: '1px' }}>
             FORMER IT ANALYST AT TOP FIRMS IN LONDON & BRISTOL
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', marginBottom: '32px', fontWeight: '900', color: '#fff', lineHeight: '1.05' }}>
            High-Impact IT Support with <br/><span style={{ color: '#3b82f6' }}>Creative Precision.</span>
          </h1>
          <p style={{ fontSize: '1.3rem', color: '#9ca3af', maxWidth: '950px', margin: '0 auto 48px', lineHeight: '1.8' }}>
            With over 3 years of experience in the highly competitive UK tech market (London and Bristol), I specialize in delivering professional 1st and 2nd line IT support for high-profile legal and corporate firms. My approach combines rapid incident resolution across Microsoft 365 infrastructure and complex network environments with exceptional communication skills tailored for VIP users and executives.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/CV_Marcos_Ponce.pdf" download style={{ padding: '20px 40px', background: '#fff', color: '#030712', borderRadius: '16px', textDecoration: 'none', fontWeight: '800', fontSize: '1rem' }}>Download Full CV</a>
            <a 
              href={`https://wa.me/${contact.whatsapp}?text=Hi%20Marcos,%20I%20saw%20your%20portfolio.`} 
              target="_blank" rel="noopener noreferrer"
              style={{ padding: '20px 40px', background: 'transparent', border: '2px solid #334155', borderRadius: '16px', textDecoration: 'none', fontWeight: '700', color: '#fff', fontSize: '1rem' }}
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* TECH STACK SECTION DARK */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: '900', color: '#3b82f6', letterSpacing: '4px', marginBottom: '50px' }}>ENTERPRISE TECH ECOSYSTEM</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {tech.map((t, i) => (
            <div key={i} style={{ padding: '24px', background: '#0f172a', borderRadius: '20px', border: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '1.8rem' }}>{t.i}</span>
              <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#cbd5e1' }}>{t.n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS & CREATIVE SIDE DARK */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          <div style={{ padding: '50px', borderRadius: '40px', background: '#1e293b', border: '1px solid #334155' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '24px', color: '#60a5fa' }}>Human-Centric Action</h3>
            <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '24px' }}>Expert in high-stakes support at top firms in Bristol and London. I manage people as efficiently as systems under pressure.</p>
            <ul style={{ padding: 0, listStyle: 'none', color: '#e5e7eb', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li>✓ VIP support for partners & executives.</li>
              <li>✓ 24/7 On-call emergency management.</li>
              <li>✓ Trilingual: English, Spanish, and Italian.</li>
            </ul>
          </div>

          <div style={{ padding: '50px', borderRadius: '40px', background: '#0f172a', border: '1px solid #1e293b' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '20px', color: '#3b82f6' }}>The Creative Side</h3>
            <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '24px' }}>Drummer and Video Editor. Running a Home Studio gives me a unique "out-of-the-box" mindset for automation and IT improvement.</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ background: '#1e293b', padding: '8px 18px', borderRadius: '25px', fontSize: '0.85rem', color: '#60a5fa', border: '1px solid #334155' }}>STUDIO OWNER</span>
              <span style={{ background: '#1e293b', padding: '8px 18px', borderRadius: '25px', fontSize: '0.85rem', color: '#60a5fa', border: '1px solid #334155' }}>DRUMMER</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DARK */}
      <footer style={{ padding: '120px 24px', borderTop: '1px solid #1f2937', textAlign: 'center' }}>
        <button 
          onClick={handleHireMe}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'clamp(1.5rem, 6vw, 3.5rem)', color: '#fff', fontWeight: '900', wordBreak: 'break-all' }}
        >
          {copied ? 'EMAIL COPIED!' : contact.email}
        </button>
        <div style={{ marginTop: '60px', fontSize: '0.85rem', color: '#4b5563' }}>
          EX-VWV (UK) • EX-IBM (ITALY) • NOW BASED IN ARGENTINA • 2026
        </div>
      </footer>
    </div>
  );
};

export default App;