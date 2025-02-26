const request = require("supertest");
const app = require("../app"); // Importa a instância do Express

describe("GET /admin", () => {
  test("Deve retornar uma lista de administradores", async () => {
    const response = await request(app).get("/admin");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve retornar uma lista vazia se não houver administradores", async () => {
    const response = await request(app).get("/admin");
    expect(response.body.length).toBe(0);
  });
});
