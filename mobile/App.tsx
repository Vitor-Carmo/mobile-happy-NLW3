import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker,Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold  } from '@expo-google-fonts/nunito'


import Routes from './src/routes'

export default function App() {

  const [fontsLoaded] = useFonts({
      Nunito_600SemiBold,
      Nunito_700Bold,
      Nunito_800ExtraBold
  })

  if(!fontsLoaded){
    return null
  }



  return (
     <Routes/>
  );
}


