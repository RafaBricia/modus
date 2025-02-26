describe("GET /categoria/:id", () => {
    test("Deve retornar um categoria pelo ID", async () => {
      const response = await request(app).get("/categoria/1");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
    });
  
    test("Deve retornar 404 se o categoria não existir", async () => {
      const response = await request(app).get("/categoria/999");
      expect(response.status).toBe(404);
    });
  });
  