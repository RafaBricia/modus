describe("GET /admin/:id", () => {
    test("Deve retornar um administradores pelo ID", async () => {
      const response = await request(app).get("/admin/1");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  
    test("Deve retornar 404 se o administradores não existir", async () => {
      const response = await request(app).get("/admin/999");
      expect(response.status).toBe(404);
    });
  });
  