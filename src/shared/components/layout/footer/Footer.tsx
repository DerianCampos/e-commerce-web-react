import { Layout } from "antd";
import styles from "./footer.module.scss";

const { Footer: AntFooter } = Layout;

const footerLinks = [
  { title: "Returns", href: "#returns" },
  { title: "Size Guide", href: "#size-guide" },
  { title: "Shipping", href: "#shipping" },
  { title: "Contact", href: "#contact" },
  { title: "Terms", href: "#terms" },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <AntFooter className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>HORDE MERCH</span>
          <p className={styles.copyright}>
            &copy; {year} HORDE MERCH. STAY BRUTAL.
          </p>
        </div>
        <ul className={styles.links}>
          {footerLinks.map((link) => (
            <li key={link.title}>
              <a href={link.href} className={styles.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </AntFooter>
  );
};

export default Footer;