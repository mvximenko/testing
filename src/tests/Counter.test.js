import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Counter from '../components/Counter';

describe('Counter', () => {
  it('increments counter', async () => {
    const user = userEvent.setup();

    render(<Counter />);

    // paragraph is not supported yet: https://github.com/testing-library/dom-testing-library/issues/1234
    // const paragraph = screen.getByRole('paragraph');
    const paragraph = screen.getByText(/count/i);
    const button = screen.getByRole('button', { name: '+' });

    await user.click(button);

    expect(paragraph).toHaveTextContent('Count is 1');
  });

  it('decrements counter', async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const paragraph = screen.getByText(/count/i);
    const button = screen.getByRole('button', { name: '-' });

    await user.click(button);

    expect(paragraph).toHaveTextContent('Count is -1');
  });
});

describe('Counter Snapshot', () => {
  it('matches DOM Snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
