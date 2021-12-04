const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const phoneValidation = RegExp(/^[0-9\b]+$/);

export const Validation = (data) => {
  //console.log(data);
  let errorObject = {
    name: "",
    email: "",
    brand: "",
    contact_number: "",
    price: "",
  };

  let error = false;
  let value = "";
  // console.log(data);
  // Object.keys(data).forEach((name) => {
  //   value = data[name];
  //   switch (name) {
  //     case "name":
  //       errorObject.name =
  //         value.length < 5 ? "Name should be 5 characaters long" : "";
  //       error = value.length < 5;
  //       break;
  //     // case "email":
  //     //   errorObject.email = regularExpression.test(value)
  //     //     ? ""
  //     //     : (error = "Email is not valid");

  //     //   break;

  //     // case "contact_number":
  //     //   errorObject.contact_number = phoneValidation.test(value)
  //     //     ? ""
  //     //     : (error = "Phone Number is not valid");

  //     //   break;
  //     default:
  //       break;
  //   }
  // });

  return { error, errorObject };
};
