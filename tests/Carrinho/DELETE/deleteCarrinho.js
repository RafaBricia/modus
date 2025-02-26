describe("DELETE /carrinho/:id", () => {
    test("Deve deletar um carrinho existente", async () => {
      const response = await request(app).delete("/carrinho/1");
      expect(response.status).toBe(204);
    });
  
    test("Deve retornar 404 se o carrinho não existir", async () => {
      const response = await request(app).delete("/carrinho/999");
      expect(response.status).toBe(404);
    });
  });
  