import { render, screen, fireEvent } from '@testing-library/react';
import ButtonNewSession from './ButtonNewSession'; 

test('should render the button with the correct label', () => {
  render(<ButtonNewSession label="Nova Sessão" onClick={() => {}} />);
  const buttonText = screen.getByText(/Nova Sessão/i);
  expect(buttonText).toBeInTheDocument();
});

test('should render the coffee icon', () => {
  render(<ButtonNewSession label="Nova Sessão" onClick={() => {}} />);

  const iconElement = screen.getByTestId('coffee-icon');
  expect(iconElement).toBeInTheDocument();
});

test('should call onClick when the button is clicked', () => {
  const onClickMock = jest.fn(); 
  render(<ButtonNewSession label="Nova Sessão" onClick={onClickMock} />);

  const buttonElement = screen.getByText(/Nova Sessão/i);
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
