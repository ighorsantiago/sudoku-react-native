import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;

    align-items: center;
    justify-content: center;
    
    padding: 19px;
    /* margin-bottom: 12px; */
    border-radius: 10px;

    background-color: blue;
`;

export const Title = styled.Text`
    font-size: 24px;
`;
