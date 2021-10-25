import { cpf as cpfValidator } from "cpf-cnpj-validator";
import IsValidCep from "@brazilian-utils/is-valid-cep";

export default function validateUser(userData) {
  const { fullName, email, cpf, address } = userData;
  const { streetAddress, houseNumber, district, city, uf, cep } = address;

  const brazilUfs = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const fullNameStatus = /^[a-zA-Z ]+$/.test(fullName) && fullName.length >= 4;

  const emailStatus = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const cpfStatus = cpfValidator.isValid(cpf);

  const cepStatus = IsValidCep(cep);

  const streetAddressStatus = streetAddress.length >= 4;

  const houseNumberStatus = /^\d+%?$/.test(houseNumber);

  const districtStatus = district.length >= 3;

  const cityStatus = city.length >= 3;

  const ufStatus = brazilUfs.includes(uf);

  const userStatus =
    fullNameStatus &&
    emailStatus &&
    cpfStatus &&
    houseNumberStatus &&
    cepStatus;

  return {
    userStatus,
    user: {
      fullNameStatus,
      emailStatus,
      cpfStatus,
    },
    address: {
      cepStatus,
      streetAddressStatus,
      houseNumberStatus,
      districtStatus,
      cityStatus,
      ufStatus,
    },
  };
}
