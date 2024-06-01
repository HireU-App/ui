//Practice example
import Styles from "@app/app/styles/Page.module.css";
import Header from "@app/app/components/Header";

export default function Dashboard() {
  return (
    <>
      <Header name="Joseann" className={Styles.border}></Header>
      <Header name="Nuzhat"></Header>
      <p>hellp from Dashboard</p>
    </>
  );
}
