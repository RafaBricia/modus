const request = require("supertest");
const app = require("../app"); // Importa a instância do Express

describe("GET /categoria", () => {
  test("Deve retornar uma lista de categorias", async () => {
    const response = await request(app).get("/categoria");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve retornar uma lista vazia se não houver categorias", async () => {
    const response = await request(app).get("/categoria");
    expect(response.body.length).toBe(0);
  });
});
