/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/preview-api";

export const withGlobals = (StoryFn, context) => {
  // const [{ darkMode }] = useGlobals();
  const [globals] = useGlobals();
  const darkMode = globals.darkMode;
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selector = isInDocs
      ? `#anchor--${context.id} .sb-story`
      : "#storybook-root";

    changeBackgroundMode(selector, { darkMode, isInDocs });
  }, [darkMode, isInDocs, context.id]);

  return StoryFn();
};

const changeBackgroundMode = (selector, state) => {
  const rootElement = document.querySelector(selector);
  if (state.darkMode) {
    rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }
};
