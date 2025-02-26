describe("GET /pagamento/:id", () => {
    test("Deve retornar um pagamento pelo ID", async () => {
      const response = await request(app).get("/pagamento/1");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  
    test("Deve retornar 404 se o pagamento não existir", async () => {
      const response = await request(app).get("/pagamento/999");
      expect(response.status).toBe(404);
    });
  });
  