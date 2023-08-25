import React, { forwardRef } from "react";
import styles from "./style.module.scss";
export const Select = forwardRef(({ label, options, ...rest }, ref) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <select
          className={styles.select}
          ref={ref}
          {...rest}
          required
          defaultValue=""
        >
          <option value="">Selecione uma opção</option>
          <option value="Primeiro Módulo (UX Design)">
            Primeiro Módulo {"(UX Design)"}
          </option>
          <option value="Segundo Módulo (Front-end Basico)">
            Segundo Módulo {"(Front-end Basico)"}
          </option>
          <option value="Terceiro Módulo (Front-end Avançado)">
            Terceiro Módulo {"(Front-end Avançado)"}
          </option>
          <option value="Quarto Módulo (Back-end)">
            Quarto Módulo {"(Back-end)"}
          </option>
          <option value="Quinto Módulo (DevOps)">
            Quinto Módulo {"(DevOps)"}
          </option>
        </select>
      </div>
    </>
  );
});
