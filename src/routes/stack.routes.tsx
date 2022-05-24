import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Game } from '../screens/Game';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {

    return (
        <Navigator headerMode="none">
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Game"
                component={Game}
            />
        </Navigator>
    );
}
