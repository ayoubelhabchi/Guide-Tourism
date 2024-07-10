const request = require("supertest");
const app = require("../app");

describe("AdminController - Registration", () => {
  it("should create a new admin", async () => {
    const adminData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      password: "password123",
    };

    const response = await request(app)
      .post("/api/admin/register")
      .send(adminData);

    if (response.statusCode !== 200) {
      console.error("Registration failed:", response.body);
    }

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Registered successfully");
  });
});

