export const updateCSSVariables = (currentTheme: Record<string, string>) => {
  Object.keys(currentTheme).forEach((key) => {
    document.documentElement.style.setProperty(`--${key}`, currentTheme[key]);
  });
};
