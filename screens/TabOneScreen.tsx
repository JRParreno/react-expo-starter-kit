import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const validationSchema = yup.object().shape({
  email: yup.string().label('Email').email().required(),
  firstname: yup.string().label('First Name').email().required(),
  lastname: yup.string().label('Last Name').email().required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
  confirmpassword: yup
    .string()
    .label('Confirm Password')
    .required('Make sure to type the same as password')
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
});

export default () => (
  <SafeAreaView style={{ backgroundColor: 'white', flex: 1,}}>
    <Formik
      initialValues={{ email: '', password: '', firstname: '', lastname: '', confirmpassword: '',}}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <React.Fragment>
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
          <Text style={{ alignItems: 'center', fontSize: 30, fontWeight: 'bold', justifyContent: 'center',}}>REGISTRATION</Text>
            <Text style={{ marginBottom: 3 }}>First Name</Text>
            <TextInput
              placeholder="First Name"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
                color: 'black',
                backgroundColor: '#AEC6CF',
              }}
              onChangeText={formikProps.handleChange('firstname')}
              onBlur={formikProps.handleBlur('firstname')}
              autoFocus
            />
            <Text style={{ color: 'red' }}>
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Last Name</Text>
            <TextInput
              placeholder="Last Name"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
                color: 'black',
                backgroundColor: '#AEC6CF',
              }}
              onChangeText={formikProps.handleChange('lastname')}
              onBlur={formikProps.handleBlur('lastname')}
              autoFocus
            />
            <Text style={{ color: 'red' }}>
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Email</Text>
            <TextInput
              placeholder="johndoe@example.com"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
                color: 'black',
                backgroundColor: '#AEC6CF',
              }}
              onChangeText={formikProps.handleChange('email')}
              onBlur={formikProps.handleBlur('email')}
              autoFocus
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Password</Text>
            <TextInput
              placeholder="Password"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
                backgroundColor: '#AEC6CF',
                color: 'black',
              }}
              onChangeText={formikProps.handleChange('password')}
              onBlur={formikProps.handleBlur('password')}
              secureTextEntry
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Confirm Password</Text>
            <TextInput
              placeholder="Confirm Password"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
                backgroundColor: '#AEC6CF',
                color: 'black',
              }}
              onChangeText={formikProps.handleChange('confirmpassword')}
              onBlur={formikProps.handleBlur('confirmpassword')}
              secureTextEntry
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.confirmpassword && formikProps.errors.confirmpassword}
            </Text>
          </View>

          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Button
        title="SUBMIT"
        onPress={() => Alert.alert('Simple Button pressed')}
            />
          )}
        </React.Fragment>
      )}
    </Formik>
  </SafeAreaView>
);

