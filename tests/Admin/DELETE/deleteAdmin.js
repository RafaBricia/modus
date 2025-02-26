describe("DELETE /admin/:id", () => {
    test("Deve deletar um administrador existente", async () => {
      const response = await request(app).delete("/admin/1");
      expect(response.status).toBe(204);
    });
  
    test("Deve retornar 404 se o usuário não existir", async () => {
      const response = await request(app).delete("/admin/999");
      expect(response.status).toBe(404);
    });
  });
  