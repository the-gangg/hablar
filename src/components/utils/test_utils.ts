export const createContext = () => ({
  router: {
    history: {
      length: jest.fn(),
      push: jest.fn(),
      replace: jest.fn()
    }
  }
});