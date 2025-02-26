const request = require("supertest");
const app = require("../app"); // Importa a instância do Express

describe("GET /pagamento", () => {
  test("Deve retornar uma lista de pagamentos", async () => {
    const response = await request(app).get("/pagamento");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve retornar uma lista vazia se não houver pagamentos", async () => {
    const response = await request(app).get("/pagamento");
    expect(response.body.length).toBe(0);
  });
});
