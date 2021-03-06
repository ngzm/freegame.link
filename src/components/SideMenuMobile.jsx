import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import CloseIcon from 'material-ui/svg-icons/content/backspace';
import AppStyle from './AppStyle';
import { CommandMenu, CategoryMenu } from './SideMenu';
import './Header.css';

export default class SideMenuMobile extends Component {
  close() {
    this.props.onChange(false);
  }

  render() {
    const cfunc = () => { this.close(); };

    return (
      <Drawer
        className="MenuDrawer"
        docked={false}
        width={AppStyle.SIDEMENU_WIDTH}
        open={this.props.open}
        onRequestChange={(o) => { this.props.onChange(o); }}
      >
        <SideMenuHeader onClick={cfunc} />
        <CommandMenu closeDrawer={cfunc} />
        <Divider />
        <CategoryMenu closeDrawer={cfunc} />
        <Divider />
        <MenuItem onClick={cfunc}>Menu Item 1</MenuItem>
        <MenuItem onClick={cfunc}>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

SideMenuMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SideMenuHeader = props => (
  <AppBar
    className="HeaderBar"
    title="MENU"
    iconElementLeft={
      <IconButton onClick={() => { props.onClick(); }}>
        <CloseIcon color="#FFFFFF" />
      </IconButton>
    }
  />
);

SideMenuHeader.propTypes = { onClick: PropTypes.func.isRequired };
