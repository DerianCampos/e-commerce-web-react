import { Button, Typography } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import styles from "./home-hero.module.scss";

const { Title, Paragraph } = Typography;

const HomeHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Title level={1} className={styles.title}>
        Welcome to E-Commerce
      </Title>
      <Paragraph className={styles.subtitle}>
        Discover amazing products at great prices. Built with React and ready
        to grow.
      </Paragraph>
      <Button type="primary" size="large" icon={<ShoppingOutlined />}>
        Shop Now
      </Button>
    </section>
  );
};

export default HomeHero;
