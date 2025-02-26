describe("PUT /pagamento/:id", () => {
    test("Deve atualizar um pagamento existente", async () => {
      const updatedData = { name: "Rafaela Ayres" };
      const response = await request(app).put("/pagamento/1").send(updatedData);
  
      expect(response.status).toBe(200);
      expect(response.body.name).toBe(updatedData.name);
    });
  
    test("Deve retornar 404 se o pagamento não existir", async () => {
      const response = await request(app).put("/pagamento/999").send({ name: "Novo Nome" });
      expect(response.status).toBe(404);
    });
  });
  