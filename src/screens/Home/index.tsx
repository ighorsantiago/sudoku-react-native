import React, { useState } from 'react';
import { StatusBar, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import {
    Container,
    Header,
    Title,
    Content,
    ModalView,
    ModalButton,
    Footer,
} from './styles';

export function Home() {

    const navigation = useNavigation();

    const [showModal, setShowModal] = useState(false);

    const levels = [
        {level: 'easy', title: 'Fácil'},
        {level: 'medium', title: 'Médio'},
        {level: 'hard', title: 'Difícil'},
        {level: 'expert', title: 'Especialista'},
    ];

    function handleNavigation(level: string) {
        setShowModal(false)
        navigation.navigate('Game', { level });
    }

    return (

        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <Title>SUDOKU</Title>
            </Header>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
            >
                <ModalView>
                    {
                        levels.map(item => (
                            <ModalButton key={item.level} title={item.title} onPress={() => handleNavigation(item.level)}/>
                        ))
                    }
                    <ModalButton title="Cancelar" onPress={() => setShowModal(false)}/>
                </ModalView>
            </Modal>

            <Footer>
                <Button title="Novo jogo" onPress={() => setShowModal(true)} />
            </Footer>
        </Container>
    );
}
