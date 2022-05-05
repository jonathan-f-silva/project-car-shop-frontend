import { Outlet } from 'react-router-dom';

import styles from './App.module.css';
import { NavBar } from './components';

export default function App() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Outlet />
    </main>
  );
}
