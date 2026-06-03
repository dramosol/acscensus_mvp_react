import { usePageEffects } from '../hooks/usePageEffects';
import Squares from '../components/Squares';
import { openContactModal } from '../components/contactEvents';
import '../styles/quienes-somos.css';

export default function QuienesSomos() {
  usePageEffects({ timeline: true });

  return (
    <>
<main>
    <section className="subhero" aria-labelledby="quienes-title">
      <div className="grid-canvas-wrap">
        <Squares
          speed={0.3}
          squareSize={96}
          direction="diagonal"
          borderColor="rgba(198,170,76,0.15)"
          hoverFillColor="rgba(198,170,76,0.08)"
        />
      </div>
      <div className="container subhero-inner">
        <div className="eyebrow reveal">Nuestra historia</div>
        <h1 id="quienes-title" className="section-title reveal delay-1" style={{fontSize: 'clamp(42px,5vw,68px)', marginBottom: '24px'}}>Dos décadas y media de <em>experiencia</em> a su servicio</h1>
        <p className="section-sub reveal delay-2" style={{maxWidth: '640px'}}>Ascensus Strategic nace de 25 años de trayectoria en los mercados financieros de Costa Rica y la región.</p>
      </div>
    </section>

    <section className="block">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-tag">Trayectoria</div>
            <h2 className="section-title">Los hitos que dieron forma a una firma nacida del mercado real.</h2>
          </div>
          <p className="section-sub">Cada etapa consolidó experiencia operativa, relaciones de confianza y una visión patrimonial que hoy se institucionaliza en Ascensus Strategic.</p>
        </div>
        <div className="timeline">
          <article className="tl-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-year">2001</div>
            <h3 className="tl-title">Inicio en Banca</h3>
            <p className="tl-desc">El socio principal inicia su carrera en el sector bancario, acumulando una sólida formación en finanzas y mercados de capitales.</p>
          </article>
          <article className="tl-item reveal delay-1">
            <div className="tl-dot"></div>
            <div className="tl-year">2011</div>
            <h3 className="tl-title">Gestión Privada</h3>
            <p className="tl-desc">Transición hacia la administración de inversiones para clientes privados: personas físicas, jurídicas, bancos y empresas.</p>
          </article>
          <article className="tl-item reveal delay-2">
            <div className="tl-dot"></div>
            <div className="tl-year">2016</div>
            <h3 className="tl-title">Hito $100M</h3>
            <p className="tl-desc">Superados los $100 millones en activos bajo gestión, consolidando la reputación como asesor de confianza.</p>
          </article>
          <article className="tl-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-year">2024</div>
            <h3 className="tl-title">$150M+ AUM</h3>
            <p className="tl-desc">El portafolio bajo asesoría supera los $150 millones, con presencia en múltiples sectores e instrumentos.</p>
          </article>
          <article className="tl-item reveal delay-1">
            <div className="tl-dot"></div>
            <div className="tl-year">2026</div>
            <h3 className="tl-title">Ascensus Strategic</h3>
            <p className="tl-desc">Fundación formal de Ascensus Strategic el 1 de mayo de 2026, institucionalizando 25 años de experiencia al servicio de sus clientes.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="block philosophy" style={{background: '#121214'}}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-tag">Filosofía</div>
            <h2 className="section-title">La disciplina detrás de cada decisión patrimonial.</h2>
          </div>
          <p className="section-sub">Nuestra visión combina independencia, confidencialidad y pensamiento de largo plazo para construir relaciones patrimoniales profundas y sostenibles.</p>
        </div>
        <div className="philosophy-grid">
          <div className="quote-block reveal">
            <div className="quote-mark">“</div>
            <blockquote>Administrar un patrimonio es, ante todo, un acto de confianza. Por eso trabajamos con la disciplina del rigor y el respeto del largo plazo.</blockquote>
            <cite>Ascensus Strategic · 2026</cite>
          </div>
          <div className="pillars reveal delay-1">
            <article className="pillar">
              <div className="pillar-num">i</div>
              <div>
                <h4>Independencia</h4>
                <p>Sin compromisos con productos o instituciones financieras: nuestras recomendaciones responden únicamente al interés del cliente.</p>
              </div>
            </article>
            <article className="pillar">
              <div className="pillar-num">ii</div>
              <div>
                <h4>Discreción</h4>
                <p>Cada relación se construye bajo estrictos estándares de confidencialidad y cuidado en cada detalle.</p>
              </div>
            </article>
            <article className="pillar">
              <div className="pillar-num">iii</div>
              <div>
                <h4>Visión de largo plazo</h4>
                <p>Preferimos la consistencia a la moda; construimos estrategias pensadas para preservar legados, no para perseguir titulares.</p>
              </div>
            </article>
            <article className="pillar">
              <div className="pillar-num">iv</div>
              <div>
                <h4>Rigor analítico</h4>
                <p>Cada decisión se sustenta en análisis profundo, métricas claras y un proceso replicable de toma de decisiones.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="final-cta">
      <div className="grid-canvas-wrap">
        <Squares
          speed={0.3}
          squareSize={96}
          direction="diagonal"
          borderColor="rgba(198,170,76,0.15)"
          hoverFillColor="rgba(198,170,76,0.08)"
        />
      </div>
      <div className="container">
        <div className="final-cta-inner reveal">
          <h2>¿Listo para proteger su <em>patrimonio</em>?</h2>
          <p>Agende una consulta privada con nuestro equipo en Escazú. Solo con cita previa.</p>
          <div className="cta-row" style={{justifyContent: 'center'}}>
            <button onClick={openContactModal} className="btn btn-primary">Agendar consulta privada</button>
          </div>
          <div className="contact-inline">
            <span><a href="mailto:info@ascentrategic.com">info@ascentrategic.com</a></span>
            <span><a href="tel:+50688158332">(506) 8815-8332</a></span>
            <span>Escazú, Centro 27, 3er piso</span>
            <span>Lun–Vie 8–5 PM</span>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
