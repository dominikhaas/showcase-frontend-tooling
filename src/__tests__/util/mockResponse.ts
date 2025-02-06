import { vi } from 'vitest'

export const mockResponse = (mockValue) => {
  vi.mock('axios', () => ({
    default: {
      get: vi.fn().mockResolvedValue(mockValue),
      CancelToken: {
        source: vi.fn().mockReturnValue({
          token: 'mockToken',
          cancel: vi.fn(),
        }),
      },
    },
  }))
};
