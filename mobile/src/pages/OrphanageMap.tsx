import React, { useEffect, useState } from 'react'

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {Marker,Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import mapMaker from '../images/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';


import api from '../services/api';

interface Orphanage{
  id: number;
  name: string; 
  latitude: number;
  longitude: number;
}

export default function OrphanageMap(){

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    const navigation = useNavigation()


    useFocusEffect(() => { 
      const fetchOrphanage = async () => {

          const response =  await api.get('orphanages')
          
          setOrphanages(response.data)
      }

      fetchOrphanage()

  })


    function handleNavigateToOrphanageDatails(id : number){
      navigation.navigate('OrphanageDatails', {id})
      
    }
    
    
    function handleNavigateToCreateOrphanage(){
      navigation.navigate('SelectMapPosition')
    }



    return(
        <View style={styles.container}>
        <MapView style={ styles.map} 
          provider={PROVIDER_GOOGLE} 
          initialRegion={ { 
            latitude: -23.4912755,
            longitude: -47.5115182,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
         }}>

           {
             orphanages.map(orphanage =>(
                <Marker
                  key={orphanage.id}
                  calloutAnchor={{
                    x: 2.5,
                    y: 0.8,
                    
                  }}
        
                  icon={mapMaker}
                  coordinate={{
                    latitude: orphanage.latitude,
                    longitude: orphanage.longitude,
                  }}
                >
                <Callout tooltip onPress={ () => handleNavigateToOrphanageDatails(orphanage.id) }>
                    <View style={styles.calloutContainer}>
                        <Text style={styles.calloutText}>{orphanage.name}</Text>
                    </View>
                </Callout>
              
              </Marker>  
             ))
           }

         </MapView>
        
        
        <View style={styles.footer }>
          <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
  
         
          <RectButton style={styles.createOrphanageButtom} onPress={ handleNavigateToCreateOrphanage}>
            <Feather name="plus"  size={20} color="#fff"/>
          </RectButton>
        </View>
  
  
      </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
  
    map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
    calloutContainer:{
      width: 160,
      height:46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
  
    },
  
    calloutText:{
      fontFamily: 'Nunito_700Bold',
      color: "#0089a5", 
      fontSize: 14,
  
    },
  
    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
  
  
        backgroundColor:'#fff',
        borderRadius: 20,
        height: 56,
        paddingStart: 24,
  
        flexDirection: 'row',
        justifyContent: 'space-between',
  
        alignItems: 'center',
  
        elevation: 3,
    },
  
  
    footerText: {
        fontFamily: 'Nunito_700Bold',
        color: '#8fa7b3'
    },
  
  
    createOrphanageButtom: {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
  
        alignItems: 'center',
  
    },
  
  });
  
  
  