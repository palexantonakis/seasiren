import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default class TemporaryDrawer extends Component {
    constructor(props) {
        super(props);
    }

    getSideList() {
        return (
            <ClickAwayListener onClickAway={this.props.onClickAway}>
                <div
                    style={{
                        width: 250
                    }}
                    role="presentation"
                >
                    <List>
                        <ListItem button>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Menu 1' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary='Menu 2' />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Menu 3' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary='Menu 4' />
                        </ListItem>
                    </List>
                </div>
            </ClickAwayListener>
        )
    }

    render() {
        return (
            <div>
                <Drawer open={this.props.open}>
                    {this.getSideList()}
                </Drawer>
            </div>
        );

    }
}