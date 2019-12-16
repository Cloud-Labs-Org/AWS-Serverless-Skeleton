module.exports = {
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  coverageReporters: ["cobertura", "html", "text", "text-summary"],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 15,
      lines: 10,
      statements: 10
    }
  },
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/spec/$1"
  },
  preset: "ts-jest",
  roots: ["<rootDir>/spec", "<rootDir>/src"],
  testEnvironment: "node"
};
