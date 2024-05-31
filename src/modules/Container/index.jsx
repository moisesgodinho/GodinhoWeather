import styles from "./Container.module.css";

const { container } = styles;

function Container({ children }) {
  return <section className={container}>{children}</section>;
}

export default Container;
