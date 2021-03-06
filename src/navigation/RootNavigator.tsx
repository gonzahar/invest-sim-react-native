import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {colors} from 'src/style/style';
import Login from 'src/views/auth/Login';
import Signup from 'src/views/auth/Signup';
import Splash from 'src/views/auth/Splash';
import Charts from 'src/views/main/Charts';
import Profile from 'src/views/main/Profile';
import Wallet from 'src/views/main/Wallet';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: colors.background,
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{gestureEnabled: false, headerShown: false}}>
        {/* <Stack.Screen name="AuthNavigator" component={Login} /> */}
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
