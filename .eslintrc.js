module.exports = {
  root: true,
  extends: ["@horns/eslint-config", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  settings: {
    next: {
      rootDir: ["apps/*/"]
    }
  }
};