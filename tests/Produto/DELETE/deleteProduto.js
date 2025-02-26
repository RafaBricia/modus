describe("DELETE /produto/:id", () => {
    test("Deve deletar um produto existente", async () => {
      const response = await request(app).delete("/produto/1");
      expect(response.status).toBe(204);
    });
  
    test("Deve retornar 404 se o produto não existir", async () => {
      const response = await request(app).delete("/produto/999");
      expect(response.status).toBe(404);
    });
  });
  