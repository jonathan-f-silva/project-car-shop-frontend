// https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
// import 'cross-fetch/polyfill';

import { render, screen } from '@testing-library/react';

import { Cars } from '.';

describe('Página Cars', () => {
  describe('ao carregar a página', () => {
    test('mostra o título "Carros"', () => {
      render(<Cars />);
      const title = screen.getByText('Cars List');
      expect(title).toBeInTheDocument();
    });
  });
});
