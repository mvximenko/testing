import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Posts from '../components/Posts';

// in case if we don't use msw
jest.mock('axios');

const mockСomments = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
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
