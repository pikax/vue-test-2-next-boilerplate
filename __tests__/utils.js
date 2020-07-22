// jest not available on node.
window.fetch = jest.fn();

// simple mock of jest
export function mockFetch(data) {
    return window.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data,
      })
    );
  }
  
  