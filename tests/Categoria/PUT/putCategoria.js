describe("PUT /categoria/:id", () => {
    test("Deve atualizar uma categoria existente", async () => {
      const updatedData = { name: "Rafaela Ayres" };
      const response = await request(app).put("/categoria/1").send(updatedData);
  
      expect(response.status).toBe(200);
      expect(response.body.name).toBe(updatedData.name);
    });
  
    test("Deve retornar 404 se a categoria não existir", async () => {
      const response = await request(app).put("/categoria/999").send({ name: "Novo Nome" });
      expect(response.status).toBe(404);
    });
  });
  