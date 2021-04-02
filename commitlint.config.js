module.exports = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    "subject-case": [2, "always", ["upper-case"]],
    "type-enum": [
      2,
      "always",
      [
        "Build",
        "Chore",
        "CI",
        "Docs",
        "Improvement",
        "Feat",
        "Fix",
        "Refactor",
        "Revert",
        "Style",
        "Test",
      ],
    ],
  },
};
