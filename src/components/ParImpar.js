import React from 'react';
import {Text, View} from 'react-native'
import Padrao from '../estilo/Padrao';

function ParImpar(num) {

    // if (num % 2 == 0) {
    //     return <Text style={Padrao.ex}>Par</Text>
    // } else {
    //     return <Text style={Padrao.ex}>Impar</Text>
    // }
    const v = num % 2 == 0 ? num + ' É Par' : num + ' É Impar'
    return <Text style={Padrao.ex}>{v}</Text>
}

export default props => 
    <View style={Padrao.container}>
        {ParImpar(props.numero)}
    </View>