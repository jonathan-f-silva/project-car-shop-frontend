import { Navigate, Route, Routes } from 'react-router-dom';

import App from '../App';
import { Cars } from '../pages';

export function Hub() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/cars" />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="*" element={<p>Nada aqui!</p>} />
      </Route>
    </Routes>
  );
}
