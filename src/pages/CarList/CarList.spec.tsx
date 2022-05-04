// https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
// import 'cross-fetch/polyfill';
import { render, screen } from '@testing-library/react';
import axios from 'axios';

import { CarList } from '.';

describe('Página Cars', () => {
  const setup = () => {
    render(<CarList />);
  };

  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        model: 'Fiesta',
        year: 2011,
        color: 'Azul',
        buyValue: 10000,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        model: 'Gol',
        year: 2012,
        color: 'Prata',
        buyValue: 15000,
        doorsQty: 4,
        seatsQty: 5,
      },
    ],
  });

  beforeEach(setup);

  describe('ao carregar a página', () => {
    test('mostra o título "Carros"', () => {
      const title = screen.getByText('Carros');
      expect(title).toBeInTheDocument();
    });

    test('mostra o nome dos carros"', async () => {
      const car1 = await screen.findByText('Fiesta');
      const car2 = await screen.findByText('Gol');
      expect(car1).toBeInTheDocument();
      expect(car2).toBeInTheDocument();
    });

    test('tem o botão de Adicionar', () => {
      const button = screen.getByText('Adicionar');
      expect(button).toBeInTheDocument();
    });
  });
});
