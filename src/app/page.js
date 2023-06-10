import styles from "./page.module.css";
import Dashboard from "./dashboard";
import Search from "./search";

export default function Home({ data }) {
  return (
    <main className={styles.main}>
      <h1>She Sharp Hackathon 2023</h1>
      <Dashboard />
    </main>
  );
}
