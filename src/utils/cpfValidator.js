function criaDigito(cpfParcial) {
  if (!cpfParcial) return "";

  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;

  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);

  const resto = total % 11;
  const digito = 11 - resto;

  return String(digito > 9 ? 0 : digito);
}

export function validaCPF(cpf) {
  const cpfLimpo = cpf.replace(/\D+/g, "");

  if (typeof cpfLimpo === "undefined") return false;
  if (cpfLimpo.length !== 11) return false;
  
  // Check for repeated digits
  if (/^(\d)\1+$/.test(cpfLimpo)) return false;

  const cpfParcial = cpfLimpo.slice(0, -2);
  const digito1 = criaDigito(cpfParcial);
  const digito2 = criaDigito(cpfParcial + digito1);

  const cpfCalculado = digito1 + digito2;

  return cpfCalculado === cpfLimpo.slice(-2);
}
