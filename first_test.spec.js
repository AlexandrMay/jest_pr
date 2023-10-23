const axios = require('axios');
axios.defaults.baseURL = 'http://5.189.186.217/';

let token = null;

describe("My first suite", () => {
  it("Authorization", async () => {
    const response = await axios.post("api/auth/login", {
      headers: {
        "Content-Type": "application/json"
      },
      email: "maysalexandr@gmail.com",
      password: "123456"
    });
    token = response.data.token;
    expect(response.data).toMatchSnapshot({
      token: expect.any(String)
    });
  });
});
