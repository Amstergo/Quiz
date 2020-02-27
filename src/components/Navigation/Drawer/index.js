import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import Backdrop from "../../UI/Backdrop";

const links = [
  { to: "/", label: "Список", exact: "true" },
  { to: "/auth", label: "Авторизация", exact: "false" },
  { to: "/quiz-creator", label: "Создать тест", exact: "false" }
];

class Drawer extends React.Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks() {
    return links.map((link, i) => {
      return (
        <li key={i}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={styles.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const classes = [styles.Drawer, !this.props.isOpen ? styles.close : null];

    return (
      <>
        <nav className={classes.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
