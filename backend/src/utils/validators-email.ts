export interface EmailValidator {
    validate(email: string): boolean;
}

export class RegexEmailValidator implements EmailValidator {
    validate(email: string): boolean {
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return regex.test(email);
    }
}