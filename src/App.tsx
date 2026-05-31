import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './styles/tokens.css';
import './styles/base.css';
import './styles/modal.css';

export default function App() {
  return (
    <>
      <div id="scroll-progress"></div>
      <Nav />
      <Outlet />
      <Footer />
      <ContactModal />
    </>
  );
}
