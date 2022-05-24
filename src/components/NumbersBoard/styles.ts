import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    background-color: white;
`;

export const Text = styled.Text`
    font-size: 32px;
`;
