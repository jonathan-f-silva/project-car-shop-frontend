// https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
// import 'cross-fetch/polyfill';
import { render, screen } from '@testing-library/react';
import axios from 'axios';

import { Cars } from '.';

describe('Página Cars', () => {
  const setup = () => {
    render(<Cars />);
  };

  beforeEach(setup);

  describe('ao carregar a página', () => {
    test('mostra o título "Carros"', async () => {
      axios.get = jest.fn().mockResolvedValue({
        data: [],
      });

      const title = screen.getByText('Cars List');
      expect(title).toBeInTheDocument();
    });
  });
});
