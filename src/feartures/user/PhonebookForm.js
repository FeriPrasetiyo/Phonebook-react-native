import { useDispatch } from 'react-redux'
import { useCallback, useState } from "react";
import {
    create
} from './userSlice';
import { TouchableOpacity, View, StyleSheet, TextInput, Text, Button } from 'react-native';



export default function PhonebookForm(props) {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: '',
        phone: ''
    });

    const handleSubmit = useCallback(() => {
        dispatch(create(user.name, user.phone))
        setUser({ name: '', phone: '' })
    }, [dispatch, user])

    const handleCencel = () => {
        setUser({ name: '', phone: '' })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Name</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to name"
                    onChangeText={name => setUser({ ...user, name })}
                    defaultValue={user.name}
                />
            </View>
            <View>
                <Text style={styles.text}>Phone</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to name"
                    onChangeText={phone => setUser({ ...user, phone })}
                    defaultValue={user.phone}
                />
            </View>
            <View >
                <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <TouchableOpacity>
                        <Button
                            color="mediumblue"
                            title="Save"
                            onPress={handleSubmit}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Button
                        color="orange"
                        title="Cencel"
                        onPress={handleCencel}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.line} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center' }}>Form</Text>
                </View>
                <View style={styles.line} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        margin: 2,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    },
    input: {
        height: 40,
        margin: 5,
        marginStart: -1,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontFamily: 'OpenSans-regular',
    },
})