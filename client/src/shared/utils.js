export const getQueryParams = (data) => {
  let queryParams = "?";
  let paramsKey = Object.keys(data);
  paramsKey.map((p, i) => {
    if (data[p] !== "") {
      queryParams += `${p}=${data[p]}`;
      if (paramsKey.length > i + 1) {
        queryParams += `&`;
      }
    }
  });
  return queryParams;
};

export const CartUtils = (category_name, session, seating, categoryID) => {
  if (
    session.session !== "Select Session" &&
    seating.seating !== "Select Seating"
  ) {
    const cartData = JSON.parse(localStorage.getItem("cartData"));

    //check cartdata is empty or not
    if (cartData) {
      let cartIndex = cartData.findIndex(
        (cartItem) => cartItem.category_name === category_name
      );
      //check current category not in exists cartitems ..push to new category
      if (cartIndex < 0) {
        cartData.push({
          categoryID: categoryID,
          category_name: category_name,
          session: session.session,
          seating: seating.seating,
        });

        localStorage.setItem("cartData", JSON.stringify(cartData));
        return { success: true };
      }
      //already exists
      else {
        return { warning: true };
      }
    }
    //empty cart 1st vendor add to cart
    else {
      let cartItems = [
        {
          categoryID: categoryID,
          category_name: category_name,
          session: session.session,
          seating: seating.seating,
        },
      ];

      localStorage.setItem("cartData", JSON.stringify(cartItems));
      return { success: true };
    }
  } else {
    return { error: true };
  }
};
