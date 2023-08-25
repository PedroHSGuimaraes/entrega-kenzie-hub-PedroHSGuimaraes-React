import { RegisterForm } from "../../Components/Forms/RegiterForm";
import pagesStyles from "../../sass/modules/pages.module.scss";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";
export const RegisterPage = () => {
  return (
    <>
      <main className={pagesStyles.pageFlex}>
        <div className="container container--input">
          <div className={styles.headerBox}>
            <img src={logo} alt="logo" />
            <Link className=" link--page link--page-color-3" to="/">
              {" "}
              Voltar
            </Link>
          </div>
          <div className={styles.flexBox}>
            <h3 className="title title--two">Crie sua conta</h3>
            <p className="paragraph paragraph--color">
              Rapido e grátis, vamos nessa
            </p>
            <RegisterForm />
          </div>
        </div>
      </main>
    </>
  );
};
