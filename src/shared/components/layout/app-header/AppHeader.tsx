import { Layout } from "antd";
import { Link } from "react-router-dom";
import styles from "./app-header.module.scss";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          E-Commerce
        </Link>
      </div>
    </Header>
  );
};

export default AppHeader;
