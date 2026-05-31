import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand">Ascensus <span>Strategic</span></Link>
            <p className="footer-tag">Oficina de Administración Patrimonial · Escazú, Costa Rica · Asesoría financiera independiente para familias, empresarios e inversionistas.</p>
          </div>
          <div className="footer-col">
            <h5>Correo</h5>
            <ul>
              <li><span className="label">General</span><a href="mailto:info@ascentrategic.com">info@ascentrategic.com</a></li>
              <li><span className="label">Director</span><a href="mailto:erojas@ascentrategic.com">erojas@ascentrategic.com</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Teléfonos</h5>
            <ul>
              <li><span className="label">Principal</span><a href="tel:+50688158332">(506) 8815-8332</a></li>
              <li><span className="label">Línea Premium</span><a href="tel:+50683110695">(506) 8311-0695</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Oficina</h5>
            <ul>
              <li>Escazú, Edificio Corporativo<br />Centro 27, 3er piso</li>
              <li><span className="label">Horario</span>Lun–Vie 8:00 AM – 5:00 PM</li>
              <li>Solo con cita previa</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Ascensus Strategic. Todos los derechos reservados.</span>
          <div className="legal">
            <a href="aviso-legal.html">Aviso legal</a>
            <a href="privacidad.html">Privacidad</a>
            <a href="cumplimiento.html">Cumplimiento</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
