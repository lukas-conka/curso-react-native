import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.props.numero}</Text>
                <TouchableHighlight onPress={this.maisUm}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight> 
            </View>
        )
    }
}