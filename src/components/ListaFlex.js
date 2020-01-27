import React from 'react'
import { ScrollView, View, FlatList, Text, SafeAreaView } from 'react-native'
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([ 'VirtualizedLists should never be nested']);

const students = [
    {id: 1, name: 'John', note: 7.6},
    {id: 2, name: 'Anna', note: 6.6},
    {id: 3, name: 'Beth', note: 1.6},
    {id: 4, name: 'Maria', note: 8.6},
    {id: 5, name: 'Luke', note: 7.6},
    {id: 6, name: 'Raphael', note: 6.6},
    {id: 7, name: 'Leh', note: 7.8},
    {id: 8, name: 'Rock', note: 7.5},
    {id: 9, name: 'Gaara', note: 9.6},

    {id: 11, name: 'Robert', note: 5.6},
    {id: 12, name: 'Pamella', note: 9.4},
    {id: 13, name: 'Yes', note: 7.8},
    {id: 14, name: 'Doarnd', note: 7.6},
    {id: 15, name: 'Make it', note: 8.6},
    {id: 16, name: 'Do it', note: 1.6},
    {id: 17, name: 'Ramon', note: 5.6},
    {id: 18, name: 'Luouc', note: 9.6},
    {id: 19, name: 'Clark', note: 3.6},
]

const itemStyle = {
    paddiingHorizontal: 15,
    height:50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

}

export const Student = props =>
    <View style={itemStyle}> 
        <Text>Nome: {props.name}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.note}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Student {...item} />
    }

    return (
        <SafeAreaView>
            <ScrollView horizontal={false}>
                <FlatList data={students} renderItem={renderItem} keyExtractor={(_, index) => index.toString()}></FlatList>
            </ScrollView>
        </SafeAreaView>
    )
}

