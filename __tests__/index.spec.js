import { useApi } from "../index";
import { mockFetch } from "./utils";

describe("useApi", () => {
  it("should work", async () => {
    mockFetch({ name: "Luke Skywalker" });
    
    const userList = useApi(
      (page) => ({ url: `https://swapi.dev/api/people/${page}` }),
      (r) => r.json()
    );
    await userList.execute(1);

    expect(userList.result.value.name).toBe("Luke Skywalker");
  });
});
