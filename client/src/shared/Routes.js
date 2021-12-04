const Routes = {
  noPage: { url: "/welcome", title: "HeyEventz-Admin" },
  dashboard: { url: "/dashboard", title: "HeyEventz-Admin" },
  register: { url: "/register", title: "HeyEventz-Admin" },
  admin: { url: "/admin", title: "HeyEventz-Admin" },
  logIn: { url: "/login", title: "HeyEventz-Admin" },
  logOut: { url: "/logout", title: "HeyEventz-Admin" },
  signUp: { url: "/signup", title: "HeyEventz-Admin" },
  forgotPassword: { url: "/forgot-password", title: "HeyEventz-Admin" },
  resetPassword: { url: "/reset-password", title: "HeyEventz-Admin" },
  notFound: { url: "/not-found", title: "HeyEventz-Admin" },
  vendorList: { url: "/vendorList", title: "HeyEventz-Admin" },
  addVendor: { url: "/addVendor", title: "HeyEventz-Admin" },
  Slots: { url: "/slots", title: "HeyEventz-Slots" },
  addSlots: { url: "/add_slots", title: "HeyEventz-Admin" },

  //Frontend
  home: { url: "/", title: "Home Page" },
  homePage: { url: "/home", title: "Home Page" },
  venuselection: { url: "/venu-selection-:value", title: "Venu Selection" },
  listingPage: { url: "/category-list-:value", title: "Listing Page" },
  cartPage: { url: "/cart", title: "Cart Page" },
  cartDetailsPage: { url: "/cart-details", title: "Cart Details" },
  checkout: { url: "/checkout", title: "checkout" },
  userLogin: { url: "/user-login", title: "User Login" },
  eventVendorprofile: {
    url: "/eventVendorprofile",
    title: "eventVendorprofile",
  },
  vendorOrders: { url: "/vendorOrders-:value", title: "Vendor Orders" },
  userOrders: { url: "/userOrders-:value", title: "User Orders" },
  userProfile: { url: "/userProfile", title: "User Profile" },
  eventVendorAddSlots: {
    url: "/eventVendorAddSlots-:value",
    title: "eventVendorAddSlots",
  },
};

export default Routes;
