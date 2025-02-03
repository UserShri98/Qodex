import React from "react";

import styles from "../styles/ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
