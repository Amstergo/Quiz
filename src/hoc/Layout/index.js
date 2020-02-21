import React from "react";
import styles from "./index.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle";
import Drawer from "../../components/Navigation/Drawer";

class Layout extends React.Component {
  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  menuClosehandler = () => {
    this.setState({
      menu: false
    });
  };

  render() {
    return (
      <div className={styles.Layout}>
        <Drawer isOpen={this.state.menu} onClose={this.menuClosehandler} />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
