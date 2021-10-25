import React from "react";
import isValidCep from "@brazilian-utils/is-valid-cep";
import { api } from "../../utilities/api/api";

function SignUp() {
  const handleCepApi = async (cep) => {
    const response = await api.getAddressbyCep(cep);
    console.log(response);
    const addressData = await response.json();
    console.log(addressData)
    return addressData;
  };
  const handleCepChange = (e) => {
    e.preventDefault();
    const cep = e.target.value;
    console.log(cep);

    if (isValidCep(cep)) {
      console.log("CEP válido!");

      const address = handleCepApi(cep);
      console.log(address);
    }
  };

  return (
    <section className="SignUp">
      <div className="container__signUp-form">
        <form className="form__signUp">
          <div className="wrapper__personal-data">
            <div className="wrapper__input">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" className="signUp__input" />
            </div>
            <div className="wrapper__input">
              <label htmlFor="birthday">Birthday:</label>
              <input type="date" name="birthday" className="signUp__input" />
            </div>
            <div className="wrapper__input">
              <label htmlFor="cpf">CPF:</label>
              <input type="text" name="cpf" className="signUp__input" />
            </div>
          </div>
          <div className="wrapper__address-data">
            <div className="wrapper__input">
              <label htmlFor="CEP">CEP:</label>
              <input
                type="text"
                name="cep"
                className="signUp__input"
                onChange={handleCepChange}
              />
            </div>
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" className="signUp__input" />
          </div>
          <div className="wrapper__form-btns">
            <input type="button" value="Register" />
            <input type="reset" value="Limpar" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
