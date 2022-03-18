import validator from "validator";

const nameValidator = (name) => {
  const regex = /[^\-a-zA-Zа-яА-ЯЁё\s]/;
  if (name.trim() === "" || regex.test(String(name).toLowerCase())) {
    return "Имя это обязательное поле";
  }
};

const emailValidator = (email) => {
  if (email.trim() === "") {
    return "Email это обязательное поле";
  } else if (!validator.isEmail(email)) {
    return "Введите корректный email";
  }
};

const zipCodeValidator = (zipCode) => {
  const regex = /^\d{5}(-\d{4})?$/;
  if (zipCode.trim() === "") {
    return "Zip code это обязательное поле";
  } else if (!regex.test(String(zipCode))) {
    return "Введите корректный Zip code";
  }
};

const inputValidator = (data) => {
  if (data.trim() === "") {
    return `Это обязательное поле`;
  }
};

const validate = {
  name: nameValidator,
  username: inputValidator,
  email: emailValidator,
  street: inputValidator,
  city: inputValidator,
  zipCode: zipCodeValidator,
  phone: inputValidator,
  website: inputValidator,
};

export default validate;
