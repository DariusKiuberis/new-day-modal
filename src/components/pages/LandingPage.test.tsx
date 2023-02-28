import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LandingPage from './LandingPage';

// ignore code below, this is just to make the test work ( long story, but it's all about MantineProvider)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vitest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vitest.fn(), // deprecated
    removeListener: vitest.fn(), // deprecated
    addEventListener: vitest.fn(),
    removeEventListener: vitest.fn(),
    dispatchEvent: vitest.fn(),
  })),
});

function setup(tsx: any) {
  return {
    user: userEvent.setup(),
    ...render(tsx),
  }
}

describe('LandinPage', () => {
  it('renders LandingPage component', () => {
    render(<LandingPage />);
    expect(screen.getByTestId('landing-page')).toMatchSnapshot()
  });

  it('open button exists', () => {
    render(<LandingPage />);

    expect(screen.getByText(/Open/)).toBeInTheDocument();
  });

  it('by clicking Open button Modal component is visible', async () => {

    const { user } = setup(<LandingPage />)

    await user.click(screen.getByRole('button', { name: /open/i }))

    waitFor(() => expect(screen.getByTestId('close-btn')).toBeInTheDocument()
    )
    // screen.debug();
  });


});