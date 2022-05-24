import React from 'react';

import { Container, Text } from './styles';

export function NumbersBoard() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Container>
      {numbers.map(item => (
        <Text>{item}</Text>
      ))}
    </Container>

  );
}
