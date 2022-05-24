import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
    backgroundColor: string;
    borderColor: string;
}

interface TextProps {
    color: string;
}

export const Container = styled(RectButton)<Props>`
    width: 40px;
    height: 40px;

    border-style: solid;
    border-width: 0.5px;
    border-color: ${({ borderColor }) => borderColor};

    background-color: ${({ backgroundColor }) => backgroundColor};
    
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Text = styled.Text<TextProps>`
    font-size: 30px;
    color: ${({ color }) => color};
`;
