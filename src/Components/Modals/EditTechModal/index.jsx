import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useContext } from "react";
import styles from "./style.module.scss";
import { ModalContext } from "../ModalContext/ModalContext";
import { TechContext } from "../../../providers/TechContext";

export const EditTechModal = () => {
  const { handleSubmit, register, reset } = useForm({});
  const { openEditModal, closeEditModal, editModalIsOpen } =
    useContext(ModalContext);

  const { editTech } = useContext(TechContext);

  const submit = (formData) => {
    editTech(formData);
    closeEditModal();
    reset();
  };
  Modal.setAppElement("#root");
  return (
    <div>
      <div>
        <Modal
          isOpen={editModalIsOpen}
          openEditModal={openEditModal}
          closeModal={closeEditModal}
          className={`Modal--container ${styles.modalContainer}`}
          overlayClassName={"Overlay"}
        >
          <div className={styles.modalHeader}>
            <h2>Registre sua tecnoliga</h2>
            <button
              className={styles.closeButton}
              onClick={closeEditModal}
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
              <label className={styles.label}>Selecionar status</label>
              <select
                className={styles.select}
                {...register("status")}
                required
              >
                <option value="Inciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button className={styles.butonSubmit} type="submit">
                Salvar alterações
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};
