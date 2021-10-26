import React, { useState } from "react";
import isValidCep from "@brazilian-utils/is-valid-cep";
import { api } from "../../utilities/api/api";
import validateUser from "../../utilities/validator/validator";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [uf, setUf] = useState("");
  const [registerOk, setRegisterOk] = useState(false);

  const handleCepApi = async (cep) => {
    const response = await api.getAddressbyCep(cep);
    console.log(response);
    const addressData = await response.json();
    console.log(addressData);
    setStreetAddress(addressData.logradouro);
    setCity(addressData.localidade);
    setDistrict(addressData.bairro);
    setUf(addressData.uf);
  };

  const handleCepChange = (e) => {
    e.preventDefault();
    const cep_aux = e.target.value;
    console.log(cep_aux);

    if (isValidCep(cep_aux)) {
      console.log("CEP válido!");
      handleCepApi(cep_aux);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.name.value;
    const email = e.target.email.value;
    const birthday = e.target.birthday.value;
    const cpf = e.target.cpf.value;

    //address data without react hook useState
    const houseNumber = e.target.houseNumber.value;
    const cep = e.target.cep.value;

    const addressPayload = {
      streetAddress,
      houseNumber,
      district,
      city,
      uf,
      cep,
    };

    const payload = {
      fullName,
      email,
      birthday,
      cpf,

      address: {
        ...addressPayload,
      },
    };

    let userValidation = validateUser(payload);

    if (userValidation.userStatus === true) {
      const payloadJson = JSON.stringify(payload);
      localStorage.setItem("USER", payloadJson);
      document.cookie = `USER=${payloadJson}; path=/`;
      window.alert("Your data was sent.");
      history.push("/");
    } else {
      const addressData = userValidation.address;
      delete userValidation.address;
      userValidation = { ...userValidation.user };
      console.log(addressData);
      console.log(userValidation);
      const invalidUserData = Object
        .keys(userValidation)
        .filter((key) => userValidation[key] === false);
      const invalidAddressData = Object
        .keys(addressData)
        .filter((key) => addressData[key] === false);

      console.log(invalidAddressData, invalidUserData);
      window.alert(
        `Your data was not set. Please verify the fields: ${invalidUserData}, ${invalidAddressData}.`
      );
    }
  };

  return (
    <section className="SignUp">
      <div className="container__signUp-form">
        <div className="wrapper__title">
          <h2>Registration:</h2>
        </div>
        <form className="form__signUp" onSubmit={handleSubmit}>
          <div className="wrapper__personal-data">
            <div className="wrapper__input">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                required={true}
                className="signUp__input"
                placeholder="complete name"
              />
            </div>
            <div className="wrapper__input">
              <label htmlFor="email">e-mail:</label>
              <input
                type="email"
                name="email"
                required={true}
                className="signUp__input"
                placeholder="ex.: user@server.com"
              />
            </div>
            <div className="wrapper__input">
              <label htmlFor="birthday">Birthday:</label>
              <input
                type="date"
                name="birthday"
                required={true}
                className="signUp__input"
              />
            </div>
            <div className="wrapper__input">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="number"
                name="cpf"
                required={true}
                className="signUp__input"
                placeholder="CPF, numbers only"
              />
            </div>
          </div>
          <div className="wrapper__address-data">
            <div className="wrapper__input">
              <label htmlFor="CEP">CEP:</label>
              <input
                type="number"
                name="cep"
                required={true}
                className="signUp__input"
                placeholder="CEP, numbers only"
                onChange={handleCepChange}
              />
            </div>
            <div className="wrapper__input">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                required={true}
                className="signUp__input"
                placeholder="Street, Avenue, etc."
                disabled={true}
                defaultValue={streetAddress}
              />
            </div>
            <div className="wrapper__input">
              <label
                htmlFor="houseNumber"
                required={true}
                className="signUp__input"
              >
                n°
              </label>
              <input
                type="text"
                name="houseNumber"
                required={true}
                className="signUp__input"
                placeholder="house/apt./etc. n°"
              />
            </div>
            <div className="wrapper__input">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                name="city"
                required={true}
                className="signUp__input"
                disabled={true}
                placeholder="city"
                defaultValue={city}
              />
            </div>
            <div className="wrapper__input">
              <label htmlFor="district">District:</label>
              <input
                type="text"
                name="district"
                required={true}
                className="signUp__input"
                disabled={true}
                placeholder="district"
                defaultValue={district}
              />
            </div>
            <div className="wrapper__input">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                name="state"
                required={true}
                className="signUp__input"
                disabled={true}
                placeholder="state"
                defaultValue={uf}
              />
            </div>
          </div>
          <div className="wrapper__form-btns">
            <input
              type="submit"
              id="submit-btn"
              value="Register"
              disabled={registerOk}
            />
            <input type="reset" id="reset-btn" value="Reset Form" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
