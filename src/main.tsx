import './main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { Cars } from './pages';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/"
            element={<HelloWorld msg="Hello React + TypeScript + Vite" />}
          />
          <Route path="/cars" element={<Cars />} />

          {/* TODO: figure out this syntax */}
          {/* <Route path="cars" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route> */}
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>Nada aqui!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
