export interface PasswordValidator {
    validate(senha: string): boolean;
}

export class RegexPasswordValidator implements PasswordValidator {
    validate(senha: string): boolean {
      const regex = /^(?=.*[a-zA-Z])(?=.*\d).{6,10}$/;
      return regex.test(senha);
    }
  }

