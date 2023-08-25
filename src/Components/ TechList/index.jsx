import React, { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { ModalContext } from "../Modals/ModalContext/ModalContext";

export const TechList = () => {
  const { postTech } = useContext(TechContext);
  const { openModal } = useContext(ModalContext);

  return (
    <>
      <div className={styles.containerHeader}>
        <h2>Tecnologias</h2>
        <button className={styles.buttonOpenModal} onClick={() => openModal()}>
          +
        </button>
      </div>
      <div>
        <ul className={styles.container}>
          {postTech.map((tech) => (
            <TechCard key={tech.id} id={tech.id} tech={tech} />
          ))}
        </ul>
      </div>
    </>
  );
};
