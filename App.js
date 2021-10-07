import React,{Component, useState} from 'react';
import { Text, TextInput, View, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [value, onChangeText] = React.useState('');
  
  return (
    <View
      style={{backgroundColor: 'magenta',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style={{color:'black'}}>Enter your value</Text>
      <TextInput
      style={{ height: 40, borderColor: 'red', borderWidth: 1, width: 300, borderRadius: 10, backgroundColor: 'purple'}}
      onChangeText={text => onChangeText(text)}

      value={value}
    />
     
<TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => Alert.alert(` ${value} `)}>
          <Text style={styles.TextStyle}> SUBMIT </Text>
            
          </TouchableOpacity>
                

    </View>
  )
    }
  const styles = StyleSheet.create({
    SubmitButtonStyle: {
      height:40,
      width:150,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      borderWidth: 1,
      borderColor: 'red',
      backgroundColor: 'red',
      marginTop:120

    },
   
    TextStyle:{
        color:'magenta',
        textAlign:'center',
        
        borderRadius:10
    }
  });
  

  

export default App;