//Practice example
import Styles from "@app/app/styles/Page.module.css";
import Header from "@app/app/components/Header";
import React from "react";
import { Button } from "antd";

export default function Dashboard() {
  return (
    <>
      <Header name="Joseann" className={Styles.border}></Header>
      <Header name="Nuzhat"></Header>
      <p>hellp from Dashboard</p>
      <Button type="primary">Button</Button>
    </>
  );
}
