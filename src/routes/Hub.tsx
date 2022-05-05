import { Navigate, Route, Routes } from 'react-router-dom';

import App from '../App';
import { CarList } from '../pages';

export function Hub() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/cars" />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="*" element={<p>Nada aqui!</p>} />
      </Route>
    </Routes>
  );
}
