module.exports = function (config) {
  config.set({
    mutate: ["src/**/*.ts?(x)", "!src/**/*@(.test|.spec|Spec).ts?(x)"],
    mutator: "typescript",
    testRunner: "jest",
    reporters: ["progress", "clear-text", "html"],
    coverageAnalysis: "off",
    jest: {
      projectType: "custom"
    }
  });
};
