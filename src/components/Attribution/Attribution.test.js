import { render, screen } from '@testing-library/react';
import Attribution from './Attribution';

describe('Attribution component', () => {
   test('render attribution as a text node', () => {
      render(<Attribution />);
      const attributionElement = screen.getByText(/babboeCodes/i);
      const attributionLink = screen.getByRole('link');
      expect(attributionElement).toBeInTheDocument();
      expect(attributionLink).toBeInTheDocument();
   });
});
