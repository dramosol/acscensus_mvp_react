import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { openContactModal } from './contactEvents';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const progress = document.getElementById('scroll-progress');
    const dot = document.getElementById('scrollDot');
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (progress) progress.style.width = `${pct}%`;
      setScrolled(window.scrollY > 60);
      if (dot) {
        const pagePct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
        dot.style.top = `${15 + pagePct * 55}%`;
        dot.style.opacity = window.scrollY > 80 ? '1' : '0';
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = `nav${scrolled ? ' scrolled' : ''}${mobileOpen ? ' mobile-open' : ''}`;

  return (
    <nav className={navClass} id="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" aria-label="Ascensus Strategic" onClick={() => setMobileOpen(false)}>
          <img className="brand-mark" src="letra_logo.png" alt="Ascensus Strategic" width="197" height="240" />
          <span className="brand-words">Ascensus <span>Strategic</span></span>
        </NavLink>
        <ul className="nav-links">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/servicios">Servicios</NavLink></li>
          <li><NavLink to="/quienes-somos">Quiénes Somos</NavLink></li>
        </ul>
        <button className="nav-cta" onClick={openContactModal}>Agendar consulta</button>
        <button className="nav-toggle" aria-label="Abrir menú" onClick={() => setMobileOpen((value) => !value)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
        </button>
      </div>
      <div className="container">
        <div className="mobile-menu" id="mobileMenu">
          <NavLink to="/" end onClick={() => setMobileOpen(false)}>Inicio</NavLink>
          <NavLink to="/servicios" onClick={() => setMobileOpen(false)}>Servicios</NavLink>
          <NavLink to="/quienes-somos" onClick={() => setMobileOpen(false)}>Quiénes Somos</NavLink>
          <button onClick={openContactModal} className="btn btn-primary" style={{ marginTop: '20px', alignSelf: 'flex-start', border: 'none' }}>Agendar consulta</button>
        </div>
      </div>
    </nav>
  );
}
