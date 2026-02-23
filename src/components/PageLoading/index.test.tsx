import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { PageLoading } from '@/components/PageLoading';

describe('PageLoading', () => {
  it('should render correctly', () => {
    const { container } = render(<PageLoading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should contain Spin component', () => {
    const { container } = render(<PageLoading />);
    expect(container.querySelector('.ant-spin')).toBeInTheDocument();
  });
});
