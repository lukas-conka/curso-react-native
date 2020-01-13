import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { Inverter, MegaSena } from './components/Mult'
import Simples from './components/Simples'

export default createDrawerNavigator({
   
    MegaSena: {
        screen: () => <MegaSena numeros={7}></MegaSena>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto="Texto para Inverter"></Inverter>
    },
    Simples:{
        screen: () => <Simples texto='Nunca desistir'></Simples>
    }

}, { drawerWidth: 300 })