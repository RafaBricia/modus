const request = require("supertest");
const app = require("../app"); // Importa a instância do Express

describe("GET /carrinho", () => {
  test("Deve retornar uma lista de carrinhos", async () => {
    const response = await request(app).get("/carrinho");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve retornar uma lista vazia se não houver carrinhos", async () => {
    const response = await request(app).get("/carrinho");
    expect(response.body.length).toBe(0);
  });
});
