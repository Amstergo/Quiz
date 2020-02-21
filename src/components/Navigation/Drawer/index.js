import React from "react";
import styles from "./index.module.css";
import Backdrop from "../../UI/Backdrop";

const links = [1, 2, 3];

class Drawer extends React.Component {
  renderLinks() {
    return links.map((link, i) => {
      return (
        <li key={i}>
          <a>Link {link}</a>
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
