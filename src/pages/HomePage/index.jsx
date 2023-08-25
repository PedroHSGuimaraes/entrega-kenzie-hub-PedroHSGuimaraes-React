import { useContext } from "react";
import { Header } from "../../Components/Header";
import pagesStyles from "../../sass/modules/pages.module.scss";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { CreateTechModal } from "../../Components/Modals/CreateTechModal";
import { TechList } from "../../Components/ TechList";
import { EditTechModal } from "../../Components/Modals/EditTechModal";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <main className={pagesStyles.pageFlex}>
        <div className="container container--page">
          <section className={styles.flexBox}>
            <h2 className="title title--two">Olá {user?.name}</h2>
            <h4 className="title title--three">{user?.course_module}</h4>
          </section>
          <section className={styles["flexBox--item"]}>
            <TechList />
          </section>
        </div>

        <section>
          <CreateTechModal />

          <EditTechModal />
        </section>
      </main>
    </>
  );
};
