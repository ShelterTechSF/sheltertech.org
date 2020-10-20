import initStoryshots, { renderOnly } from "@storybook/addon-storyshots";

// eslint-disable-next-line no-console
const originalErrorFn = console.error;

/** Ensure that no console.error() calls are made when the target function runs.
 *
 * Stubs out the console.error() function and throws an exception if the test
 * attempts to call console.error();
 */
const ensureNoConsoleErrors = (fn) => {
  const errors = [];
  try {
    // eslint-disable-next-line no-console
    console.error = (...args) => {
      errors.push(args);
    };
    fn();
  } finally {
    // eslint-disable-next-line no-console
    console.error = originalErrorFn;
  }
  if (errors.length !== 0) {
    for (const error of errors) {
      originalErrorFn(...error);
    }
    throw new Error(
      "Test failed due to calls made to console.error. Please correct all errors that appear in the Storybook console log."
    );
  }
};

initStoryshots({
  test: (options) => {
    ensureNoConsoleErrors(() => {
      renderOnly(options);
    });
  },
});
