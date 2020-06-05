import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
//import {globalStyles} from '../styles/global';

const Auth = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function AuthNavigation(){
    return(
        <NavigationContainer>
        <Auth.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <Auth.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Auth.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
        
        </Auth.Navigator>
        </NavigationContainer>
    );
}