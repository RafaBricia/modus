describe("GET /carrinho/:id", () => {
    test("Deve retornar um carrinho pelo ID", async () => {
      const response = await request(app).get("/carrinho/1");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  
    test("Deve retornar 404 se o carrinho não existir", async () => {
      const response = await request(app).get("/carrinho/999");
      expect(response.status).toBe(404);
    });
  });
  