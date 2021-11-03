import React,{useState} from 'react';
import { View ,Text,StyleSheet,Keyboard,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import TodoItem from './android/components/task/TaskItem'


export default function App() {
  const [text, setText] = useState('');
  const [task,settask]=useState([])
  function add(){
      settask([...task,text])
      setText('')
  }
  const deleteItem=(index)=>{
      const arr=[...task]
      arr.splice(index,1)
      settask(arr)
  }

  return (
    
   <View style={styles.container}>
        <View style={styles.header}>
                <Text style={styles.text}>TODO LIST</Text>
        </View>
        <View style={styles.body}>
            <ScrollView>
                    {task.map(function(item,index){
                      return <TodoItem key={index} text={item} handleDelete={()=>deleteItem(index)}/>
                    })}
            </ScrollView>
        </View>
        <View style={styles.footer}>
                  <View style={styles.inputCover}>
                      <TextInput
                          style={styles.input}
                          placeholder="Add Todo Item .."
                          onChangeText={text => setText(text)}
                          defaultValue={text}
                      />
                  </View>
                  <View style={styles.buttonCover}>
                      <TouchableOpacity  onPress={add}>
                          <Text style={styles.button}>Add</Text>
                      </TouchableOpacity >
                  </View>
              
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  header:{
      flex:1,
      backgroundColor:'#27f',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  text:{
      color:'white',
      fontSize:25,
  },
  body:{
    flex:7,
  
  }
  ,footer:{
    flex:0.4,
    flexDirection:'row',
    backgroundColor:'blue',
    alignContent:"space-around",
    backgroundColor:'#27f',
    padding:20,
  },
  input:{
    backgroundColor:'white',
    height:30
  },
  inputCover:{
    flex:2.5,
    width:70,
  },
  buttonCover:{
    flex:1,
    marginLeft:10,
  },
  button:{
    backgroundColor:'white',
    color:"#27f",
    fontSize:20,
    height:30,
    borderRadius:10,
    textAlign:'center'
  }

});
