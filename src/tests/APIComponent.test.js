import { render, screen } from '@testing-library/react';
import { createServer } from './server';
import APIComponent from '../components/APIComponent';

createServer([
  {
    path: '/api',
    res: () => ({
      title: 'Some pretty title',
    }),
  },
]);

test('gets the data', async () => {
  render(<APIComponent />);

  // const heading = await waitFor(() => screen.getByRole('heading'));
  const heading = await screen.findByRole('heading');

  expect(heading).toHaveTextContent('Some pretty title');
});
