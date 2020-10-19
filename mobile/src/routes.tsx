import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const {Navigator, Screen} = createStackNavigator()


import OrphanageMap from './pages/OrphanageMap'
import OrphanageDatails from './pages/OrphanageDatails'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'
import Header from './components/Header'


export default function Routes(){
    return(
        <NavigationContainer >
            <Navigator screenOptions={{ headerShown : false, cardStyle: { backgroundColor:'#f2f3f5' } }}>


                <Screen name="OrphanageMap" component={OrphanageMap}/>
                <Screen name="OrphanageDatails" component={OrphanageDatails} options={{
                    headerShown: true,
                    header: ()=> <Header showCancel={false} title="Orfanato"/>
                }}/>

                <Screen name="SelectMapPosition" component={SelectMapPosition}  options={{
                    headerShown: true,
                    header: ()=> <Header title="Selecione no mapa"/>
                }}/>


                <Screen name="OrphanageData" component={OrphanageData} options={{
                    headerShown: true,
                    header: ()=> <Header title="Informe os dados"/>
                }}/>

            </Navigator>
        </NavigationContainer>
    )
}

