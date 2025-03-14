const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const adminSchema = new Schema({
  nome: { type: String, required: true },
  cpf: { type: Number, required: true },
  senha: { type: String, required: true },
  email: { type: String, required: true }
});

adminSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("senha")) {
    try {
      this.senha = await bcrypt.hash(this.senha, 10);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

adminSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.senha, (err, same) => {
    callback(err, same);
  });
};

module.exports = mongoose.model("admin", adminSchema);
