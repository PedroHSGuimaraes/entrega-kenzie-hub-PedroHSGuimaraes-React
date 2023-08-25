import { api } from "../../services/api";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const navigateTo = useNavigate();
  const currentPath = window.location.pathname;

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieUserHub:Token"));
    const id = JSON.parse(localStorage.getItem("@KenzieUserHub:Id"));
    const loadUserInformation = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigateTo(currentPath);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token && id) {
      loadUserInformation();
    }
  }, []);

  const loginRequest = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@KenzieUserHub:Token", JSON.stringify(data.token));
      localStorage.setItem("@KenzieUserHub:Id", JSON.stringify(data.user.id));
      toast.success("Login realizado com sucesso");
      navigateTo("/home");
    } catch (error) {
      if (error.response?.data.status === "error") {
        toast.error("Email ou senha incorretos");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    navigateTo("/");
    localStorage.removeItem("@KenzieUserHub:Token");
    localStorage.removeItem("@KenzieUserHub:Id");
  };

  const createAccount = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/users", formData);
      console.log(data);
      toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      console.log(error);
      if (error.response?.data === "Email already exists") {
        toast.error("Email já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        loginRequest,
        logout,
        createAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
