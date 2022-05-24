import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import {
   Container,
   Text
} from './styles';

interface MenuButtonProps extends RectButtonProps {
    name: string;
    size: number;
    text: string;
}

export function MenuButton({name, size, text, ...rest}: MenuButtonProps) {

   return (

      <Container {...rest}>
          <FontAwesome5
            name={name}
            size={size}
            color="white"
          />
          <Text>
             {text}
          </Text>
      </Container>
   );
}
