import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const btn = screen.getByRole('button');
  const image = screen.getByRole('img');

  expect(btn).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});