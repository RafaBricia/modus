describe("DELETE /categoria/:id", () => {
    test("Deve deletar uma categoria existente", async () => {
      const response = await request(app).delete("/categoria/1");
      expect(response.status).toBe(204);
    });
  
    test("Deve retornar 404 se a categoria não existir", async () => {
      const response = await request(app).delete("/categoria/999");
      expect(response.status).toBe(404);
    });
  });
  