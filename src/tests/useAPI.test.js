// @testing-library/react-hooks not supported yet
// https://github.com/testing-library/react-hooks-testing-library/issues/654
import { renderHook, waitFor } from '@testing-library/react';
import { createServer } from './server';
import useAPI from '../hooks/useAPI';

createServer([
  {
    path: '/api',
    res: () => ({
      title: 'Some pretty title',
    }),
  },
]);

test('should increment', async () => {
  // renderHook from @testing-library/react-hooks
  // const { result, waitForNext } = renderHook(() => useAPI());
  // await waitForNextUpdate()

  const { result } = renderHook(() => useAPI());

  await waitFor(() => {
    expect(result.current.title).toBe('Some pretty title');
  });
});
