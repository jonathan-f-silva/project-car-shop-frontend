// https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
// import 'cross-fetch/polyfill';
import { render, screen } from '@testing-library/react';
import axios from 'axios';

import { CarList, carsMock } from '.';

describe('Página Cars', () => {
  axios.get = jest.fn().mockResolvedValue({ data: carsMock });

  describe('ao carregar a página', () => {
    test('mostra os elementos esperados', async () => {
      render(<CarList />);
      await screen.findByText(carsMock[0].model);

      const title = screen.getByText('Carros');
      const button = screen.getByText('Adicionar');
      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();

      carsMock.forEach(({ model }) => {
        const carModel = screen.getByText(model);
        expect(carModel).toBeInTheDocument();
      });
    });
  });
});
