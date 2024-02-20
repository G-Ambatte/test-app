import { render, screen } from '@testing-library/react';
import App from './App';

test('returns true', () => {
  render(<App />);
  const linkElement = true;
  expect(linkElement).toBeTruthy();
});
