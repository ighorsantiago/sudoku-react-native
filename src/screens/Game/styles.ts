import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
    background-color: black;
`;

export const Header = styled.View`
    
    width: 100%;
    height: 50px;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    color: white;

    /* background-color: green; */
`;

export const BackButton = styled(RectButton)`
    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;

    /* background-color: green; */
`;

// export const BackButton = styled(RectButton)`
//     width: 40px;
//     height: 40px;

//     border-radius: 20px;

//     justify-content: center;
//     align-items: center;

//     background-color: transparent;

//     position: absolute;
//     top: 1px;
//     left: 10px;
// `;

export const Title = styled.Text`
    font-size: 28px;
    color: white;
`;

export const Settings = styled(RectButton)`
    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;

    /* background-color: red; */
`;

export const Content = styled.View`
    width: 100%;

    margin-top: 30px;

    align-items: center;

    /* background-color: greenyellow; */
`;

export const Board = styled(FlatList)`
`;

export const Menu = styled.View`
    width: 100%;

    flex-direction: row;

    padding: 12px;
    margin: 15px;

    justify-content: space-between;
    align-items: center;

    /* background-color: red; */
`;

export const ModalView = styled.View`
    width: 100%;
    height: 95%;

    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 0;

    border-color: darkblue;
    border-width: 1px;
    border-radius: 10px;

    background-color: black;
    opacity: 1;
`;

export const ModalText = styled.Text`
    color: white;
    font-size: 12px;
`;

export const Footer = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* background-color: indigo; */
`;

export const Button = styled(RectButton)`
    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: white;
`;

export const Text = styled.Text`
    font-size: 40px;
    color: darkslateblue;
`;
