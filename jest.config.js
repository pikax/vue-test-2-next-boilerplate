const isVue2 = process.env.Vue === "2";

module.exports = {
  setupFiles: isVue2 ? ["<rootDir>/__tests__/setupTest.2.js"] : undefined,
  testMatch: ["<rootDir>/__tests__/**/*spec.[jt]s?(x)"],
};
