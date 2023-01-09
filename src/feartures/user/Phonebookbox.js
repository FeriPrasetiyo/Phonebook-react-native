import PhonebookForm from './PhonebookForm'
import PhonebookList from './PhonebookList'
import Phonebookseach from './Phonebookseach'
import { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Phonebook(props) {
    const [add, setAdd] = useState({
        isAdd: false
    });

    const handleAdd = () => {
        setAdd({
            isAdd: true
        })
    }

    const handleSearch = () => {
        setAdd({
            isAdd: false
        })
    }


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Phone Book Apps</Text>
            </View>
            <View style={styles.colom}>
                <TouchableOpacity onPress={handleAdd}><Text style={styles.label}>Add</Text></TouchableOpacity>
                <Text style={styles.label}>/</Text>
                <TouchableOpacity onPress={handleSearch}><Text style={styles.label}>Search</Text></TouchableOpacity>
            </View>
            <View>
                {
                    add.isAdd ? <PhonebookForm /> : <Phonebookseach />
                }
            </View>
            <View>
                <PhonebookList />
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        backgroundColor: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        height: 70,
        color: 'black',
        textAlign: 'center',
        padding: 10,
    },
    colom: {
        flexDirection: 'row'
    },
    label: {
        fontWeight: "bold",
        fontFamily: 'OpenSans-regular',
        fontSize: 20
    }
})