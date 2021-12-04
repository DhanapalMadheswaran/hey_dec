import ApiService from "./ApiServices";
import Const from "../shared/constants";

class AuthService extends ApiService {
  userLogin = "users/login";
  generateLink = "users/generate-reset-link";
  resetPwd = "users/reset-password";
  userDetail = "users";
  setOptionEndpoint = "setOption";
  getOptionEndpoint = "getOption/";

  async signIn(loginCredentials) {
    let response = await this.post(
      this.baseURL + this.userLogin,
      loginCredentials
    );

    if (response.status !== 200) {
      throw Error(response.statusText);
    }

    // Store the token
    localStorage.setItem(Const.storage.token, response.data.success.token);
    return response;
  }

  isAuthenticated() {
    const token = localStorage.getItem(Const.storage.token);
    try {
      const jwtPayload = this.parseJwt(token);
      if (jwtPayload) {
        return jwtPayload.exp > +new Date() / 1000;
      }
    } catch (e) {
      //console.log(e);
    }
    return false;
  }

  parseJwt(token) {
    if (token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
    }
    return token;
  }

  async generateResetLink(data) {
    try {
      let response = await this.post(this.baseURL + this.generateLink, data);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  async resetPassword(data) {
    try {
      let response = await this.post(this.baseURL + this.resetPwd, data);
      return response;
    } catch (e) {
      return e.response;
    }
  }

  async usersDetails() {
    try {
      let response = await this.get(this.baseURL + this.userDetail);
      localStorage.setItem("userData", JSON.stringify(response.data));
      return response;
    } catch (e) {
      //console.error(e);
    }
  }

  isSuperAdminUser() {
    const token = localStorage.getItem(Const.storage.token);
    try {
      const json = this.parseJwt(token);
      if (json) {
        return json.scopes.filter((obj) => obj === "super-admin").length > 0;
      }
    } catch (e) {
      //console.log(e);
    }
    return false;
  }

  isAdminBackOfficeUser() {
    const token = localStorage.getItem(Const.storage.token);
    try {
      const json = this.parseJwt(token);
      if (json) {
        return (
          json.scopes.filter((obj) => obj === "admin-backoffice").length > 0
        );
      }
    } catch (e) {
      //console.log(e);
    }
    return false;
  }

  isAdminSalesUser() {
    const token = localStorage.getItem(Const.storage.token);
    try {
      const json = this.parseJwt(token);
      if (json) {
        return json.scopes.filter((obj) => obj === "admin-sales").length > 0;
      }
    } catch (e) {
      //console.log(e);
    }
    return false;
  }

  isResellerUser() {
    const token = localStorage.getItem(Const.storage.token);
    try {
      const json = this.parseJwt(token);
      if (json) {
        return json.scopes.filter((obj) => obj === "reseller").length > 0;
      }
    } catch (e) {
      //console.log(e);
    }
    return false;
  }

  async setOption(data) {
    try {
      let response = await this.post(
        this.baseURL + this.setOptionEndpoint,
        data
      );
      localStorage.setItem("adminMessage", data.value);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  async getOption(option) {
    try {
      let response = await this.get(
        this.baseURL + this.getOptionEndpoint + option
      );
      localStorage.setItem("adminMessage", response.data.message);
      return response.data.message;
    } catch (e) {
      console.error(e);
    }
  }
}

export default AuthService;
