import { LoginForm } from "../../Components/Forms/LoginForm";
import pagesStyles from "../../sass/modules/pages.module.scss";
import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";

export const LoginPage = () => {
  return (
    <>
      <main className={pagesStyles.pageFlex}>
        <div className="container container--input">
          <div className={styles.flexBox}>
            <img src={logo} alt="Logo" />
            <LoginForm />
          </div>
        </div>
      </main>
    </>
  );
};
