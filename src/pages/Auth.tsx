/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, StyleSheet, Pressable} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
type FormData = {
  firstName: string;
  Password: string;
};
export default function Auth({navigation}: any): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
  } = useForm({
    defaultValues: {
      firstName: '',
      Password: '',
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#7CE2C3',
      }}>
      <Text style={{width: 149, height: 63, fontSize: 60, color: 'white'}}>
        Ph ind
      </Text>
      <Text style={{color: 'white', height: 13}}>Find your pharmacy</Text>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7CE2C3',
        }}>
        <Text style={{flex: 0.1, fontSize: 25, color: 'black'}}>Log In</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="User name"
              maxLength={15}
              inlineImagePadding={12}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              textAlign={'left'}
              placeholder="Mot de passe"
              keyboardType="visible-password"
              secureTextEntry={true}
              maxLength={15}
              inlineImagePadding={12}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Password"
        />
        {errors.Password && <Text>This is required.</Text>}

        <View
          style={{
            flex: 0.4,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#7CE2C3',
          }}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Compte')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 17,
                fontFamily: 'bold',
              }}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 53,
    width: 306,
    margin: 12,
    borderWidth: 0.1,
    fontSize: 20,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  button: {
    backgroundColor: '#000000',
    opacity: 0.8,
    width: 306,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
