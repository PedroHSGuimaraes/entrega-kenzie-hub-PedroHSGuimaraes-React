import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
export const Header = () => {
  const { logout, user } = useContext(UserContext);

  return (
    <>
      <header>
        <div className="container ">
          <div className={styles.flexBox}>
            <img src={logo} alt="logo kenziehub" />
            <button
              className="link--page link--page-color-3"
              onClick={(e) => logout()}
            >
              Sair
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
