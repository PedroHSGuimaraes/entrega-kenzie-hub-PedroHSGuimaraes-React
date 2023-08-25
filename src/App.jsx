import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

import PulseLoader from "react-spinners/PulseLoader";
import "./sass/index.scss";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? (
        <span className="loading">
          <PulseLoader color="#FF577F" />
        </span>
      ) : (
        <RoutesMain />
      )}

      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
};
