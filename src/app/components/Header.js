//practice example
import Styles from "@app/app/styles/Page.module.css";
import React from "react";
import PropTypes from "prop-types";
export default function Header({ name }) {
  return (
    <>
      <h1 className={Styles.h1}>Example heading by {name}</h1>
      <p className={Styles.p}>The world is round, or is it??</p>
    </>
  );
}
Header.propTypes = {
  name: PropTypes.number,
};
