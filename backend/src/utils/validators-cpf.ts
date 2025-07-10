export interface CPFValidator {
    validate(cpf: string): boolean;
  }
  
  export class RegexCPFValidator implements CPFValidator {
    validate(cpf: string): boolean {
      const cleanedCPF = cpf.replace(/\D/g, ""); 
  
      return /^\d{11}$/.test(cleanedCPF);
    }
  }
  