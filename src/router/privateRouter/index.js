import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appRoutes } from "../routes";

const PrivateRouter = (props) => {
  const { children } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("validUser");
    console.log(token, "token");

    if (token === "true") {
      setShowComponent(true);
    } else {
      navigate(appRoutes.login);
    }
  }, [location]);

  if (showComponent) {
    return children;
  } else {
    return null;
  }
};
export { PrivateRouter };
