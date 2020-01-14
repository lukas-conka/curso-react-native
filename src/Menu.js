import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { Inverter, MegaSena } from './components/Mult'
import ParImpar from './components/ParImpar'
import Simples from './components/Simples'
import Contador from './components/Contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador numero={8}></Contador>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={7}></MegaSena>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto="Texto para Inverter"></Inverter>
    },
    Simples:{
        screen: () => <Simples texto='Nunca desistir'></Simples>
    },
    ParImpar:{
        screen: () => <ParImpar numero={ 33 }></ParImpar>,
        navigationOptions: { title: 'Par e Impar'}
    }

}, { drawerWidth: 300 })