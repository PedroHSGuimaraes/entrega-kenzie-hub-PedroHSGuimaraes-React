import React, { forwardRef } from "react";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className={styles.inputBox}>
        <label>{label}</label>
        <div className={styles.inputGrid}>
          <input
            type={showPassword ? "text" : "password"}
            ref={ref}
            {...rest}
          />
          {error ? (
            <p className="headline headline--bolt error">{error.message}</p>
          ) : null}
          <button type="button">
            {showPassword ? (
              <MdVisibilityOff onClick={() => setShowPassword(false)} />
            ) : (
              <MdVisibility onClick={() => setShowPassword(true)} />
            )}
          </button>
        </div>
      </div>
    </>
  );
});
