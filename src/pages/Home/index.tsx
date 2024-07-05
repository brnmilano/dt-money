import Header from "../../components/Pages/Header";
import Summary from "../../components/Pages/Summary";
import Table from "../../components/Pages/Table";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Summary />

      <Table />
    </div>
  );
}
