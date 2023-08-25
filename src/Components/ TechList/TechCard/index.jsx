import { MdEdit, MdDelete } from "react-icons/md";
import { useContext } from "react";
import { ModalContext } from "../../Modals/ModalContext/ModalContext";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { openEditModal } = useContext(ModalContext);
  const { setPostIds, deleteTechs } = useContext(TechContext);
  const handleEddit = (id) => {
    setPostIds(id);
    openEditModal(true);
  };

  return (
    <li>
      <h3> {tech.title} </h3>
      <p>{tech.status}</p>
      <button
        onClick={() => {
          handleEddit(tech.id);
        }}
      >
        <MdEdit />
      </button>

      <button onClick={() => deleteTechs(tech.id)}>
        <MdDelete />
      </button>
    </li>
  );
};
