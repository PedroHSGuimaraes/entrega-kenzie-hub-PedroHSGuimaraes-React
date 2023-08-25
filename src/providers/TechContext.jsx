import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [postTech, setPostTech] = useState([]);
  const [postIds, setPostIds] = useState("");

  useEffect(() => {
    const getTech = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("@KenzieUserHub:Token"));

        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPostTech(data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    getTech();
  }, []);

  const postCreate = async (formData) => {
    try {
      const token = JSON.parse(localStorage.getItem("@KenzieUserHub:Token"));
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPostTech([...postTech, data]);
      toast.success("Tecnologia adicionada com sucesso");
    } catch (error) {
      toast.error("Erro ao adicionar tecnologia");
    }
  };

  const editTech = async (formData) => {
    try {
      const token = JSON.parse(localStorage.getItem("@KenzieUserHub:Token"));
      await api.put(`/users/techs/${postIds}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const edit = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const upDate = edit.data.techs;
      setPostTech(upDate);
      toast.success("Status atualizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar tecnologia");
    }
  };

  const deleteTechs = async (deleteId) => {
    try {
      const token = JSON.parse(localStorage.getItem("@KenzieUserHub:Token"));
      await api.delete(`/users/techs/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newList = postTech.filter((tech) => tech.id !== deleteId);
      toast.success("Tecnologia excluída com sucesso");
      setPostTech(newList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ postCreate, postTech, setPostIds, editTech, deleteTechs }}
    >
      {children}
    </TechContext.Provider>
  );
};
