describe("GET /produto/:id", () => {
    test("Deve retornar um produto pelo ID", async () => {
      const response = await request(app).get("/produto/1");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  
    test("Deve retornar 404 se o produto não existir", async () => {
      const response = await request(app).get("/produto/999");
      expect(response.status).toBe(404);
    });
  });
  