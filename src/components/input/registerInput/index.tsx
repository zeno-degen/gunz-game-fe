"use client";
import { CSSProperties, FC, ChangeEvent, useState } from "react";
import Image from "next/image";
import styles from "./registerInput.module.scss";

type InputProps = {
  label: string;
  type: string;
};

const RegisterInput: FC<InputProps> = ({ label, type }) => {
  const [pwType, setPWType] = useState("password");
  const showPWIconState = type === "password";
  const isValidEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSetEmail = (email: string) => {
    if (type === "email") {
      if (!isValidEmail(email)) {
        console.log("Invalid email");
      } else {
        console.log("Valid email");
      }
    }
  };

  const handleShowPassword = () => {
    pwType === "text" ? setPWType("password") : setPWType("text");
  };

  return (
    <div className={styles["input-content"]}>
      <div className={styles["label"]}>{label}</div>
      <input
        className={styles["value"]}
        type={showPWIconState ? pwType : type}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSetEmail(e.target.value)
        }
      />
      {showPWIconState && (
        <div className={styles["show-pw"]} onClick={handleShowPassword}>
          <Image src="/icons/showpw.svg" alt="Show Password Icon" fill />
        </div>
      )}
    </div>
  );
};

export default RegisterInput;
