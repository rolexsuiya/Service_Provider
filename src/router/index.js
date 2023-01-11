import { Route, Routes } from "react-router-dom";
import LcaEditPage from "../screen/LcaEditPage";
import LcaListPage from "../screen/lcaList";
import ResignIn from "../screen/resetSign";
import SignIn from "../screen/signin";
import { PrivateRouter } from "./privateRouter";
import { appRoutes } from "./routes";

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path={appRoutes.resetSign} element={<ResignIn />}></Route>
      <Route
        path={appRoutes.lcaListPage}
        element={
          <PrivateRouter>
            <LcaListPage />
          </PrivateRouter>
        }
      ></Route>
      <Route
        path={appRoutes.lcaEditPage}
        element={
          <PrivateRouter>
            <LcaEditPage />
          </PrivateRouter>
        }
      ></Route>
    </Routes>
  );
}
export default RouterApp;
