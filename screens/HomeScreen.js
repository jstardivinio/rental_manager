import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import {globalStyles} from '../styles/global';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};






