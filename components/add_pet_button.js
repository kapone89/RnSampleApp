import React, {Component} from "react";
import {Container, Content, Button, Icon, Fab} from "native-base";
import {observable} from "mobx"
import {observer} from "mobx-react/native"

@observer
export default class AddPetButton extends Component {
    @observable active = false;

    toggleActive() {
        this.active = !this.active
    }

    render() {
        return (
            <Fab active={this.active} direction="up" containerStyle={{
                marginLeft: 10
            }} style={{
                backgroundColor: "#5067FF"
            }} position="topRight" onPress={() => this.toggleActive()}>
                <Icon name="md-share"/>
                <Button style={{
                    backgroundColor: "#34A34F"
                }}>
                    <Icon name="logo-whatsapp"/>
                </Button>
                <Button style={{
                    backgroundColor: "#3B5998"
                }}>
                    <Icon name="logo-facebook"/>
                </Button>
                <Button disabled style={{
                    backgroundColor: "#DD5144"
                }}>
                    <Icon name="ios-mail"/>
                </Button>
            </Fab>
        );
    }
}
