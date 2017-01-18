import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon
} from "native-base";
import AddPetButton from "./add_pet_button"
import {observer} from "mobx-react/native"

@observer
export default class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Sample App</Title>
                </Header>

                <Content>
                  <AddPetButton />
                </Content>
            </Container>
        );
    }
}
