describe("PUT /produto/:id", () => {
    test("Deve atualizar um produto existente", async () => {
      const updatedData = { name: "Rafaela Ayres" };
      const response = await request(app).put("/produto/1").send(updatedData);
  
      expect(response.status).toBe(200);
      expect(response.body.name).toBe(updatedData.name);
    });
  
    test("Deve retornar 404 se o produto não existir", async () => {
      const response = await request(app).put("/produto/999").send({ name: "Novo Nome" });
      expect(response.status).toBe(404);
    });
  });
  