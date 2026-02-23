import { describe, it, expect, vi } from 'vitest';

vi.mock('@/utils/processEnv', async () => {
  const actual = await vi.importActual('@/utils/processEnv');
  return {
    ...actual,
    APP_ENV: 'test',
    NODE_ENV: 'test',
    __DEV__: true,
  };
});

import { APP_ENV, NODE_ENV, __DEV__ } from '@/utils/processEnv';

describe('processEnv', () => {
  it('should export APP_ENV', () => {
    expect(APP_ENV).toBe('test');
  });

  it('should export NODE_ENV', () => {
    expect(NODE_ENV).toBe('test');
  });

  it('should export __DEV__', () => {
    expect(__DEV__).toBe(true);
  });
});
