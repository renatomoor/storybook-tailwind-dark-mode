/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn, context) => {
  const [{ darkMode }] = useGlobals();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selector = isInDocs ? '#docs-root' : 'body';

    changeBackgroundMode(selector, { darkMode, isInDocs });
  }, [darkMode]);

  return StoryFn();
};

const changeBackgroundMode = (selector, state) => {
  const rootElement = document.querySelector(selector);
  if (state.darkMode) {
    rootElement.classList.add('dark');
  } else {
    rootElement.classList.remove('dark')
  }
}
