import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Title,
} from './styles';

interface Props {
  closeSelectCategory: () => void;
}

export function LevelSelect({ closeSelectCategory }: Props) {

  const navigation = useNavigation();

  const levels = [
    'Easy',
    'Medium',
    'Hard',
    'Expert'
  ];

  function handleNavigation(level: string) {
    navigation.navigate('Game', { level });
    closeSelectCategory;
  }

  return (
    <Container>
      <Header>
        <Title>Selecione o level do jogo</Title>
      </Header>

      {
        levels.map(level => (
          <Button key={level} title={level} onPress={() => handleNavigation(level.toLowerCase())} />
        ))
      }
    </Container>
  );
}