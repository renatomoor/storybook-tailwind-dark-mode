import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ darkMode, className }, updateGlobals] = useGlobals();

  const toggleDarkMode = useCallback(
    () =>
      updateGlobals({
        darkMode: !darkMode,
        className: className,
      }),
    [darkMode, className]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={darkMode}
      title="Enable dark mode"
      onClick={toggleDarkMode}
    >
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7.746 23.962c-1.216 0-2.426-.187-3.596-.554-.314-.099-.525-.386-.525-.715s.211-.617.525-.715c4.396-1.384 7.349-5.409 7.35-10.018-.001-4.608-2.954-8.634-7.35-10.018-.315-.099-.526-.387-.526-.716 0-.329.211-.617.525-.715 1.177-.37 2.392-.557 3.61-.557 1.909 0 3.825.473 5.539 1.368 2.842 1.483 4.935 3.984 5.896 7.042.959 3.053.67 6.302-.815 9.146-1.485 2.845-3.984 4.939-7.037 5.898-1.171.367-2.381.554-3.596.554zm-.868-1.537c.289.024.578.036.867.036 1.063 0 2.122-.163 3.147-.485 5.523-1.735 8.606-7.64 6.871-13.164-.841-2.676-2.673-4.864-5.159-6.162-1.5-.783-3.176-1.197-4.846-1.197-.294 0-.589.013-.883.038 3.756 2.101 6.123 6.087 6.124 10.468 0 4.38-2.366 8.365-6.121 10.466z"
        />
      </svg>
    </IconButton>
  );
};
