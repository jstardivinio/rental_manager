import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import TabBarIcon2 from '../components/TabBarIcon2';
import HomeScreen from '../screens/HomeScreen';
import BuildingsScreen from '../screens/BuildingsScreen';
import StatsScreen from '../screens/StatsScreen';
import ChatsScreen from '../screens/ChatsScreen';
import TenantsScreen from '../screens/ChatsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
       <BottomTab.Screen
        name="Tenants"
        component={TenantsScreen}
        options={{
          title: 'Tenants',
          tabBarIcon: ({ focused }) => <TabBarIcon2 focused={focused} name="account-group" />,
        }}
      />
      <BottomTab.Screen
        name="Buildings"
        component={BuildingsScreen}
        options={{
          title: 'Buildings',
          tabBarIcon: ({ focused }) => <TabBarIcon2 focused={focused} name="home-city" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Welcome',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          title: 'Stats',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-stats" />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Rental';
    case 'Buildings':
      return 'Check your Buildings';
    case 'Stats':
      return 'Statistics';
    case 'Chats':
      return 'Chats';
    case 'Tenants':
      return 'Tenants';
  }
}
