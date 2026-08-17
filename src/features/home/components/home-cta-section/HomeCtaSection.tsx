import { Card, Row, Col, Typography } from "antd";
import {
  ShoppingCartOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import styles from "./home-cta-section.module.scss";

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: (
      <ShoppingCartOutlined
        style={{ fontSize: 32, color: "var(--color-primary)" }}
      />
    ),
    title: "Easy Shopping",
    description:
      "Browse our curated catalog and add items to your cart in seconds.",
  },
  {
    icon: (
      <SafetyCertificateOutlined
        style={{ fontSize: 32, color: "var(--color-primary)" }}
      />
    ),
    title: "Secure Checkout",
    description:
      "Your payment information is protected with industry-standard encryption.",
  },
  {
    icon: (
      <RocketOutlined
        style={{ fontSize: 32, color: "var(--color-primary)" }}
      />
    ),
    title: "Fast Delivery",
    description:
      "Get your orders delivered quickly and track them every step of the way.",
  },
];

const HomeCtaSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <Title level={2} className={styles.sectionTitle}>
        Why Shop With Us
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {features.map((feature) => (
          <Col xs={24} sm={12} md={8} key={feature.title}>
            <Card variant="outlined" className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <Title level={3} className={styles.cardTitle}>
                {feature.title}
              </Title>
              <Paragraph type="secondary" className={styles.cardDesc}>
                {feature.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HomeCtaSection;
