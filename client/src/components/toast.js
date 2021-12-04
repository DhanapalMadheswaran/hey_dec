import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const config = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
const Toast = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message, config);
      break;
    case "warning":
      toast.warning(message, config);
      break;
    case "error":
      toast.error(message, config);
      break;
    default:
      toast.success(message, config);
      break;
  }
};
export default Toast;
