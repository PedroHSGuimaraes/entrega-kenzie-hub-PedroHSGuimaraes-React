import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useContext } from "react";
import styles from "./style.module.scss";
import { Input } from "../../Forms/Input";
import { ModalContext } from "../ModalContext/ModalContext";
import { TechContext } from "../../../providers/TechContext";
export const CreateTechModal = () => {
  const { handleSubmit, register, reset } = useForm();
  const { modalIsOpen, openModal, closeModal } = useContext(ModalContext);
  const { postCreate } = useContext(TechContext);

  const submit = (formData) => {
    postCreate(formData);
    closeModal();
    reset();
  };
  Modal.setAppElement("#root");
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <div>
        <Modal
          isOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          className={`Modal--container ${styles.modalContainer}`}
          overlayClassName={"Overlay"}
        >
          {" "}
          <div className={styles.modalHeader}>
            <h2>Registre sua tecnoliga</h2>
            <button
              className={styles.closeButton}
              onClick={closeModal}
              type="button"
            >
              X
            </button>
          </div>
          <div>
            <form
              className={styles.formContainer}
              onSubmit={handleSubmit(submit)}
            >
              <Input
                {...register("title")}
                label="Nome"
                type="text"
                placeholder="Digite o nome da tecnologia"
              />

              <label className={styles.label}>Selecionar status</label>
              <select className={styles.select} {...register("status")}>
                <option value="Inciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button className={styles.butonSubmit} type="submit">
                Cadastrar tecnologia
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};
