import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Sample component for demonstration
function FetchGreeting() {
  const [greeting, setGreeting] = React.useState('');
  React.useEffect(() => {
    fetch('/api/greeting')
      .then(res => res.json())
      .then(data => setGreeting(data.greeting));
  }, []);
  return <div>{greeting ? greeting : 'Loading...'}</div>;
}

describe('FetchGreeting integration', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ greeting: 'Hello, world!' })
      })
    );
  });
  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });
  it('renders greeting from API', async () => {
    render(<FetchGreeting />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Hello, world!')).toBeInTheDocument());
  });
}); 