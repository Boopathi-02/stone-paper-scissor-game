import React, { useEffect, useRef, useState } from 'react'
import { Image, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNRestart from 'react-native-restart';
import { useNavigation } from '@react-navigation/native';
const images = [
    require('../images/rock2.png'),
    require('../images/paper3.png'),
    require('../images/scissor3.jpg'),
];


const Mainpage = () => {
    const navigation = useNavigation();
    const confettiRef = useRef(null);


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(Math.floor(Math.random() * 3));
            setCurrentImageIndex2(Math.floor(Math.random() * 3));
        }, 150);
        return () => clearInterval(interval);
    }, []);

    const [load, setLoad] = useState(0)

    // ====================================

    const [myvalue, setMyvalue] = useState(0)
    const [computervalue, setComputer] = useState(0)
    const [select, setSelect] = useState(0)
    const [com_select, setCom_select] = useState(0)

    const [lot, setLot] = useState(0)
    function trigger_lottie() {
        if (confettiRef.current) {
            confettiRef.current.play(0);
        }
        setLot(1)

        setTimeout(()=>{
            navigation.replace('Mainpage');
        },3000)

    }


    function game(value) {
        setLoad(1)
        setSelect(value)

        var me = myvalue
        var com = computervalue

        setTimeout(() => {
            if (me == 2 || com == 2) {
                if (me == 2) {
                    trigger_lottie();

                } else {
                    alert("you are the loser")
                    navigation.replace('Mainpage');

                }
            } else {

                const random_value = Math.floor(Math.random() * 3);
                setCom_select(random_value)

                if (value == random_value) {

                } else {


                    if (value == 0 && random_value == 1) {
                        com += 1;
                        setComputer(com)

                    }
                    if (value == 1 && random_value == 2) {
                        com += 1;
                        setComputer(com)

                    }
                    if (value == 2 && random_value == 0) {
                        com += 1;
                        setComputer(com)

                    }

                    if (value == 1 && random_value == 0) {
                        me += 1;
                        setMyvalue(me)
                    }
                    if (value == 2 && random_value == 1) {
                        me += 1;
                        setMyvalue(me)
                    }
                    if (value == 0 && random_value == 2) {
                        me += 1;
                        setMyvalue(me)
                    }
                }
            }
            setLoad(0)
        }, 2000)




    }
    return (
        <>
            <LottieView
                ref={confettiRef}
                source={require('../images/celebrate.json')}
                style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, zIndex: lot === 0 ? 0 : 1 }}

            />

            <View style={{ flex: 1, backgroundColor: '#ffffe6' }}>

                <View style={{ height: 200 }}>

                    <View style={{ height: "40%", display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#5B84B1FF', height: "75%", width: '40%', borderCurve: 20, borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Computer</Text>
                        </View>
                        <View style={{ backgroundColor: '#5B84B1FF', height: "75%", width: '40%', borderCurve: 20, borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>You</Text>
                        </View>

                    </View>
                    <View style={{ height: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                        {load == 1 ?
                            <View style={{ height: '90%', width: '35%', backgroundColor: 'black' }}>
                                <Image source={images[currentImageIndex]} style={{ width: '100%', height: '100%' }} />
                            </View> :
                            <View style={{ height: '90%', width: '35%' }}>
                                <Image source={images[com_select]} style={{ width: '100%', height: '100%' }} />
                            </View>}

                        <View style={{ width: '20%', height: '90%' }}>

                            <LottieView
                                source={require('../images/lot.json')}
                                autoPlay
                                loop
                                style={{ height: '100%', width: '100%' }}
                            />

                        </View>
                        {load ?
                            <View style={{ height: '90%', width: '35%' }}>
                                <Image source={images[currentImageIndex]} style={{ width: '100%', height: '100%' }} />
                            </View> :
                            <View style={{ height: '90%', width: '35%' }}>
                                <Image source={images[select]} style={{ width: '100%', height: '100%' }} />
                            </View>}

                    </View>

                    <View style={{ height: '200%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: '60%', width: '95%', backgroundColor: '#949398FF', borderRadius: 40 }}>
                            <View style={{ width: '100%', height: '45%', borderTopEndRadius: 40, borderTopStartRadius: 40, display: 'flex', flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>
                                <View style={{ height: '90%', width: '28%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={{ uri: "https://www.kindpng.com/picc/m/138-1387206_iron-man-face-hd-png-download.png" }} style={{ height: '90%', width: '80%', borderRadius: 100 }} />
                                </View>
                                <View style={{ height: '50%', width: '25%', borderRadius: 30, borderWidth: 1, borderColor: 'grey' }}>
                                    <Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 40, fontWeight: '900', height: '100%', textAlign: 'center', color: 'white' }}>VS</Text>
                                </View>
                                <View style={{ height: '90%', width: '28%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVueq0upXesLyCfEu39rNbfs-EMednY4CQkH5cUHwTAU0z-bwqKNNuV-jkyo6_a_6OWA0&usqp=CAU" }} style={{ height: '90%', width: '80%', borderRadius: 100 }} />
                                </View>



                            </View>

                            <View style={{ width: '100%', height: '55%', borderBottomEndRadius: 40, borderBottomStartRadius: 40, display: 'flex', flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>

                                <View style={{ height: "75%", width: '30%', borderCurve: 20, borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center', fontSize: 40, fontWeight: '900' }}>{computervalue}</Text>

                                </View>
                                <View style={{ height: "75%", width: '40%', borderCurve: 20, borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>:</Text>
                                </View>

                                <View style={{ height: "75%", width: '30%', borderCurve: 20, borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center', fontSize: 40, fontWeight: '900' }}>{myvalue}</Text>
                                </View>



                            </View>




                        </View>

                    </View>

                    <View style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '30%', height: '100%' }}>
                            <TouchableOpacity style={{ width: '100%', borderRadius: 100, height: '70%', marginTop: '30%' }} onPress={() => game(0)}>
                                <Image source={require("../images/rock2.png")} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '30%', height: '100%' }}>
                            <TouchableOpacity style={{ width: '100%', borderRadius: 100, height: '70%', marginTop: '30%' }} onPress={() => game(1)}>
                                <Image source={require("../images/paper3.png")} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '30%', height: '100%' }}>
                            <TouchableOpacity style={{ width: '100%', borderRadius: 100, height: '70%', marginTop: '30%' }} onPress={() => game(2)}>
                                <Image source={require("../images/scissor3.jpg")} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

            </View>


        </>
    )
}

export default Mainpage;

