import { withRouter } from "react-router-dom";
import Constants from "../../shared/constants";

const Container = ({ children, location }) => {
  const { pathname } = location;
  const routesList = Object.entries(Constants.routes).map((obj) => obj[1]);
  const route = routesList.find((obj) => obj.url === pathname);
  if (route) {
    document.title =
      Constants.ApplicationName + Constants.TitleDivder + route.title;
  }

  return children;
};

export default withRouter(Container);
