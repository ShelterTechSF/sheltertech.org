// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
};

// Used to allow react-modal to work in tests.
// https://github.com/facebook/react/issues/11565#issuecomment-427547413
jest.mock("react-dom", () => ({
  createPortal: (node) => node,
}));
