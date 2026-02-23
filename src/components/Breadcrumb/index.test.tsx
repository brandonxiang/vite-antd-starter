import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { BreadcrumbView } from '@/components/Breadcrumb';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useLocation: () => ({ pathname: '/dashboard' }),
  };
});

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Breadcrumb', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<BreadcrumbView />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
