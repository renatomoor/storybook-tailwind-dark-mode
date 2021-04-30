/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn, context) => {
  const [{ darkMode }] = useGlobals();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selectorId = isInDocs ? `#anchor--${context.id} .docs-story` : `root`;

    changeBackgroundMode(selectorId, { darkMode, isInDocs });
  }, [darkMode]);

  return StoryFn();
};

function changeBackgroundMode(selector, state) {
  const rootElement = document.getElementById(selector);
  if (state.darkMode) {
    rootElement.classList.add('dark');
  } else {
    rootElement.classList.remove('dark')
  }
}
