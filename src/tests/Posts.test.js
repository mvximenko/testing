import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Posts from '../components/Posts';

// in case we don't use msw
jest.mock('axios');

const mockСomments = [
  {
    userId: 1,
    id: 1,
    title: 'Title 1',
    body: 'Body 1',
  },
  {
    userId: 1,
    id: 2,
    title: 'Title 2',
    body: 'Body 2',
  },
];

describe('Comments', () => {
  it('gets all comments', async () => {
    axios.get.mockResolvedValue({ data: mockСomments });

    render(<Posts />);

    const comments = await screen.findAllByRole('listitem');

    expect(comments).toHaveLength(mockСomments.length);
  });
});
