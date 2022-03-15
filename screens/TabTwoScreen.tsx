import { isLoading } from 'expo-font';
import AnimatedLottieView from 'lottie-react-native';
import React, { Component, useState } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, ActivityIndicator, SafeAreaView, StatusBar, ImageBackground} from 'react-native';
import ViewWithLoading from '../components/ViewWithLoading';




export default class App extends Component {

    state = {
      email: '',
      password: '',
    };
  
  
  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Hello!</Text>
        <Text style={styles.titleText}>Welcome back you've been missed!</Text>
        <TextInput
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='USERNAME'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'PASSWORD'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText}> LOG IN </Text>
       </TouchableOpacity>

       <Text style={styles.titleText}>FORGOT PASSWORD?</Text>
       
       
      <ViewWithLoading loading ={true}>
      </ViewWithLoading>
      </View>
      
      
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7393B3',
    
  },
  titleText:{
    fontFamily: 'Anton-Regular.ttf',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    width: 200,
    height: 45,
    padding: 10,
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: '#6082B6',
    borderColor: 'black',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonText:{
    fontFamily: 'Anton-Regular.ttf',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    fontFamily: 'Anton-Regular.ttf',
    fontSize: 15,
    height: 50,
    padding: 10,
    borderWidth: 3,
    borderColor: 'white',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  


},
  

  





)


