import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: black;
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;

    background-color: black;

    justify-content: center;
    align-items: center;

`;

export const Title = styled.Text`
    font-size: 32px;
    color: white;
`;

export const Content = styled.View`
    width: 100%;

    align-items: center;
    justify-content: space-between;

    /* margin-top: 50px; */
    padding: 120px 30px;

    background-color: black;
`;

export const ModalView = styled.View`
    width: 100%;
    height: 40%;

    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 0;

    border-color: darkblue;
    border-width: 1px;
    border-radius: 10px;

    background-color: black;
    opacity: 0.9;
`;

export const ModalButton = styled.Button`
    width: 100%;

    align-items: center;
    justify-content: center;

    background-color: blue;
`;

export const Footer = styled.View`
    width: 100%;

    margin-bottom: 0;

    justify-content: center;
    align-items: center;
`;
