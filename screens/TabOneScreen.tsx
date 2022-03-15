import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Text
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: '', first_name: '', last_name: '', confirm_pass: ''
  }
  onChangeText = (key: string, val: string) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SIGN UP NOW!</Text>
         <TextInput
          style={styles.input}
          placeholder='First Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('first_name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('last_name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('confirm_pass', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
        onPress={this.signUp}
        title="REGISTER"
        color="#000080"
        accessibilityLabel="All Done! You are now registered." />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#38555F',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AEC6CF',
  },
  text:{
    fontFamily: 'Anton-Regular.ttf',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  
  }
  





)

function success(arg0: string, success: any) {
  throw new Error('Function not implemented.')
}
