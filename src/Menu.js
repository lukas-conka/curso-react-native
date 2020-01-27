import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import { Inverter, MegaSena } from './components/Mult'
import ParImpar from './components/ParImpar'
import Simples from './components/Simples'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import Avo from './components/ComunicaoDireta'
import  TextoSincronizado from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

const MainNavigator = createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex:{
        screen: ListaFlex,
        navigationOptions: { title: 'Lista (Flex Box)'}

    },
    TextoSincronizado:{
        screen: TextoSincronizado,
        navigationOptions:{ title: 'Text Synced'}        
    },
    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva'></Avo>
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18}></ValidarProps>
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador></Contador>
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

},)


const App = createAppContainer(MainNavigator);

export default App;