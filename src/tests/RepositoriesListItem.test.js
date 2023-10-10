import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from '../components/repositories/RepositoriesListItem';

// DON'T
// jest.mock('../components/tree/FileIcon', () => {
//   return () => {
//     return 'File Icon Component';
//   };
// });

// const pause = () => new Promise((resolve) => setTimeout(resolve, 100));

function renderComponent() {
  const repository = {
    full_name: 'facebook/react',
    language: 'javascript',
    description: 'JS library',
    owner: {
      login: 'facebook',
    },
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };

  // MemoryRouter required when component contains Link
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return {
    repository,
  };
}

test('shows a link to github homepage for this repository', async () => {
  const { repository } = renderComponent();

  // DON'T 2X
  // await act(async () => {
  //   await pause();
  // });

  // DO
  await screen.findByRole('img', { name: 'javascript' });

  const link = screen.getByRole('link', { name: /github repository/i });
  expect(link).toHaveAttribute('href', repository.html_url);
});

test('shows a fileicon with the appropriate icon', async () => {
  renderComponent();

  const icon = await screen.findByRole('img', { name: 'javascript' });

  expect(icon).toHaveClass('js-icon');
});

test('shows a link to code editor page', async () => {
  const { repository } = renderComponent();

  await screen.findByRole('img', { name: 'javascript' });

  const link = await screen.findByRole('link', {
    name: new RegExp(repository.owner.login),
  });

  expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`);
});
