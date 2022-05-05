import { Link } from 'react-router-dom';

import Logo from '@/assets/logo.png';

import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <nav>
      <img className={styles.logo} alt="React logo" width="40px" src={Logo} />
      <Link to="/">Home</Link>
      <Link to="/cars">Cars</Link>
    </nav>
  );
}
