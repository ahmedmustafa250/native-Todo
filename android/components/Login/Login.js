import React,{useState,useEffect} from 'react'
import {Keyboard,Text,View,TextInput,StyleSheet,Button,SafeAreaView,TouchableOpacity} from 'react-native'


export default function Login() {
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);

    useEffect(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus("Keyboard Shown");
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardStatus("Keyboard Hidden");
      });
  
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);




    return (
        <SafeAreaView>
            <View style={style.login}>
                <View>
                    <Text style={style.head}>Login</Text>
                </View>
                <View style={style.form}>
                    <View style={style.emailbox}>
                        <Text style={style.emailHead}>Email</Text>
                        <TextInput
                            placeholder="Email" style={style.email}
                            onSubmitEditing={Keyboard.dismiss}
                        />
                    </View>
                    <View style={style.passwordbox}>
                        <Text style={style.passwordHead}>Password</Text>
                            <TextInput
                                placeholder="Password" 
                                style={style.password}
                                secureTextEntry={true}
                                onSubmitEditing={Keyboard.dismiss}
                            />
                    </View>
                    <View style={style.buttonContainer}>
                        <TouchableOpacity style={{ height: 100, marginTop: 10 }}>
                            <Text style={style.button}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        
    )
}

const style=StyleSheet.create({
    login:{
        textAlign:'center',
        backgroundColor:'#27f',
        paddingTop:170,
        paddingBottom:220,
    },
    head:{
        fontSize:35,
        textAlign:'center',
        color:'white',
    },
    form:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:500,
    },
    emailHead:{
        marginBottom:10,
        fontSize:20,
        color:'white'
    },
    passwordHead:{
        marginBottom:10,
        fontSize:20,
        color:'white'
    },
    emailbox:{
        padding:20,
        position:'relative',
        bottom:110
    },
    email:{
        height:40,
        width:300,
        backgroundColor:'white',
        color:'black',
        borderRadius:4,
        fontSize:18,
        borderColor:'black'
    },
    passwordbox:{
        padding:20,
        position:'relative',
        bottom:100,
    },
    password:{
        height:40,
        width:300,
        backgroundColor:'white',
        color:'black',
        borderRadius:4,
        fontSize:18
    },
    buttonContainer:{
        marginTop:-50,
    },
    button:{
        backgroundColor:'white',
        color:'#27f',
        borderRadius:20,
        paddingLeft:40,
        paddingRight:40,
        paddingTop:10,
        paddingBottom:10,
        fontSize:18,
        fontWeight:'bold'

    }
})