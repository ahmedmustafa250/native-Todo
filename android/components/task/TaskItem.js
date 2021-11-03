import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function TaskItem(props) {
    const leftSwipe=()=>{
        return (
            <TouchableOpacity onPress={props.handleDelete}>
                <View style={style.swapCover}>
                    <Text  style={style.swapButton}>Delete</Text>
                </View>
            </TouchableOpacity>
           
        )
    }


    return (
        <Swipeable renderLeftActions={leftSwipe}>
            <View style={style.mainTop}>
                <View style={style.main}>
                    <View style={style.leftSide}>
                        <View>
                            <TouchableOpacity style={style.square}></TouchableOpacity>
                        </View>
                    <View>
                        <Text style={style.todoitems}>{props.text}</Text>
                    </View>
                    </View>
                    <View style={style.rightSide}>
                        <TouchableOpacity>
                            <Image source = {require('C:/Users/Ahmed Mustafa/native-todo-app/image/close.png')} style={style.delete} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Swipeable>
        
    )
}

const style=StyleSheet.create({
    mainTop:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
    },

    main:{
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        padding:15,
        width:'80%',
    },
    leftSide:{
        flex:1,
        flexDirection:'row'
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#7bf',

    },
    todoitems:{
        marginLeft:10,
    },
    delete:{
        width:20,
        height:20
    },
    swapCover:{
        marginTop:30,
        marginLeft:10,
       
    },
    swapButton:{
        backgroundColor:'red',
        padding:10,
        color:'white',
        fontSize:18,
        
        
    }


})