describe("DELETE /pagamento/:id", () => {
    test("Deve deletar um pagamento existente", async () => {
      const response = await request(app).delete("/pagamento/1");
      expect(response.status).toBe(204);
    });
  
    test("Deve retornar 404 se o pagamento não existir", async () => {
      const response = await request(app).delete("/pagamento/999");
      expect(response.status).toBe(404);
    });
  });
  