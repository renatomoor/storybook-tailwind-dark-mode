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
  const [{ prefix }] = useGlobals();
  const rootElement = document.getElementById(selector);
  if (state.darkMode) {
    rootElement.classList.add(`${prefix}dark`);
  } else {
    rootElement.classList.remove(`${prefix}dark`)
  }
}
