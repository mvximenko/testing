import { render, screen, within } from '@testing-library/react';
import UserList from '../components/UserList';

function renderComponents() {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  render(<UserList users={users} />);

  return { users };
}

test('render one row per user', () => {
  renderComponents();
  // const { container } = render(<UserList users={users} />);
  // eslint-disable-next-line
  // const rows = container.querySelectorAll('tbody tr');

  // screen.logTestingPlaygroundURL();

  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const { users } = renderComponents();

  for (const user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.name });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
