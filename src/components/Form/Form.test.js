import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form.jsx';
import React, { useContext } from 'react';
import Input from '../Form-Control/Input/Input.jsx';

const mockedUsedNavigate = jest.fn();
jest.mock('react', () => ({
   ...jest.requireActual('react'),
   useContext: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
}));
function ChildComponent({ prop1, prop2 }) {
   return (
      <div>
         <span>{prop1}</span>
         <span>{prop2}</span>
      </div>
   );
}

describe('Form component', () => {
   test('renders form without error', () => {
      const mockedChild = React.createElement(ChildComponent, {
         title: /^.+$/,
      });
      useContext.mockReturnValue({ inputData: jest.fn() });
      render(<Form>{mockedChild}</Form>);
      const formElement = screen.getByTestId('form');
      expect(formElement).toBeInTheDocument();
   });

   test('submits form when the submit button is clicked and redirects after form submission', () => {
      useContext.mockReturnValue({
         inputData: jest.fn(),
         setInputData: jest.fn(),
      });
      const mockPropValue = 'text-input';
      render(
         <Form>
            <Input
               key={mockPropValue}
               type="text"
               title={mockPropValue}
               label={mockPropValue}
               required="required"
            />
         </Form>,
      );
      const nameInput = screen.getByTestId(mockPropValue);
      const submitButton = screen.getByRole('button');

      fireEvent.change(nameInput, { target: { value: mockPropValue } });
      fireEvent.click(submitButton);
      expect.assertions(1);
      return new Promise((resolve) => {
         setTimeout(() => {
            expect(mockedUsedNavigate).toHaveBeenCalled();
            resolve();
         }, 2000);
      });
   });
});
