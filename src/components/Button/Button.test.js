import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Button from './Button.jsx';

describe('Button Component', () => {
   test('render button on the screen with text', () => {
      render(<Button type="submit" />);
      const buttonElement = screen.getByRole('button');
      const buttonText = screen.getByText(/^.+$/);
      expect(buttonElement).toBeInTheDocument();
      expect(buttonText).toBeInTheDocument();
   });
   test('render button/Link on the screen with text', () => {
      render(
         <MemoryRouter>
            <Button />
         </MemoryRouter>
         
      );
      const buttonElement = screen.getByRole('button');
      const buttonText = screen.getByText(/^.+$/);
      expect(buttonElement).toBeInTheDocument();
      expect(buttonText).toBeInTheDocument();
   });

   test('is disabled when has "disabled" prop', () => {
      render(<Button type="submit" disable="true" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeDisabled();
   });

   test('button is clicked', () => {
      const handleClick = jest.fn();
      render(<Button type="submit" click={handleClick} />);
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
      expect(handleClick).toHaveBeenCalled();
   });
});
