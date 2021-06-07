/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn, context) => {
  const [{ darkMode }] = useGlobals();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selectorId = isInDocs ? `docs-root` : `root`;

    changeBackgroundMode(selectorId, { darkMode, isInDocs });
  }, [darkMode]);

  return StoryFn();
};

const changeBackgroundMode = (selector, state) => {
  const rootElement = document.getElementById(selector);
  if (state.darkMode) {
    rootElement.classList.add('m-dark');
  } else {
    rootElement.classList.remove('m-dark')
  }
}
