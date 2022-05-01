import { Link, Outlet } from 'react-router-dom';

import Logo from '@/assets/logo.png';

import styles from './App.module.css';

export default function App() {
  return (
    <main className={styles.main}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
      </nav>
      <Outlet />
      <img className={styles.logo} alt="React logo" width="400px" src={Logo} />
    </main>
  );
}
