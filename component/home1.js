import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';



const Home = () => {

    const navigation = useNavigation();

    const router = () => {
        navigation.navigate("Mainpage")
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffe6' }}>
            <View style={{ height: 600, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require("../images/logo1.png")}
                    style={{ width: '80%', height: '50%' }}
                />

            </View>
            <View style={{ height: 400, }}>
                <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} 
                onPress={router}>
                    <View style={{ backgroundColor: '#ffff00', padding: 15, width: '80%', borderCurve: 20, borderRadius: 100 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>Let's Play</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Home;