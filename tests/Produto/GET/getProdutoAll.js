const request = require("supertest");
const app = require("../app"); // Importa a instância do Express

describe("GET /produto", () => {
  test("Deve retornar uma lista de produtos", async () => {
    const response = await request(app).get("/produto");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve retornar uma lista vazia se não houver produtos", async () => {
    const response = await request(app).get("/produto");
    expect(response.body.length).toBe(0);
  });
});
