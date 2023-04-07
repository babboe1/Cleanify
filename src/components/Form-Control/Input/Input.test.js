import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input.jsx';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';

jest.mock('react', () => ({
   ...jest.requireActual('react'),
   useContext: jest.fn(),
}));

describe('Input', () => {
   test( 'renders input properly without error', () => {
      useContext.mockReturnValue({ setInputData: jest.fn() });
      render(<Input type="text" title="Text-Input" />);
      const inputElement = screen.getByTestId('Text-Input');
      expect(inputElement).toBeInTheDocument();
   });

   test('handles user input correctly', () => {
      useContext.mockReturnValue({ setInputData: jest.fn() });
      render(<Input type="text" title="Text-Input" />);
      const inputElement = screen.getByTestId('Text-Input');
      userEvent.type(inputElement, 'hello');
      expect(inputElement).toHaveValue('hello');
   });

   test('triggers the onChange function when user inputs', () => {
      useContext.mockReturnValue({ setInputData: jest.fn() });
      const mockOnChange = jest.fn();
      render(<Input title="Text-Input" change={mockOnChange} />);
      const input = screen.getByTestId('Text-Input');
      fireEvent.change(input, { target: { value: 'Test' } });
      expect(mockOnChange).toHaveBeenCalled();
   });
});
