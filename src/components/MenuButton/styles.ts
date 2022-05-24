import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    flex-direction: column;

    justify-content: space-between;
    align-items: center;

    padding: 5px;
`;

export const Text = styled.Text`
    font-size: 12px;
    color: white;
    
    margin-top: 5px;
`;
