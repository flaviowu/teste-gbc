export const api = {
  baseUrl: "https://viacep.com.br/ws/",

  getAddressbyCep: (cep) => fetch(api.baseUrl + cep + "/json"),
};
