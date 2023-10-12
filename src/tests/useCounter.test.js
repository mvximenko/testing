// @testing-library/react-hooks not supported yet
// https://github.com/testing-library/react-hooks-testing-library/issues/654
import { renderHook, act } from '@testing-library/react';
import useCounter from '../hooks/useCounter';

test('should increment', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
