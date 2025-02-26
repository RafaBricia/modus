describe("POST /admin", () => {
  test("Deve criar um novo administrador", async () => {
    const newUser = { name: "Rafaela", email: "rafaela@email.com" };
    const response = await request(app).post("/admin").send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe(newUser.name);
  });

  test("Deve falhar se faltar dados obrigatórios", async () => {
    const response = await request(app).post("/admin").send({});
    expect(response.status).toBe(400);
  });
});
