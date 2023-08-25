import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProtectRouts } from "../Components/ProtectRouts";
import { ProtectPublicRoute } from "../Components/ProtectPublicRouts";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectPublicRoute />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectRouts />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
