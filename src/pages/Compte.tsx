/* eslint-disable prettier/prettier */
import React, {createContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import staticImage from '../../imgs/sick.png';
import doctor from '../../imgs/symbol1.png';
import phind from '../../imgs/phind.png';

type FormData = {
  firstName: string;
  Password: string;
};
const Compte = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.4}}>
        <Image style={{width: '100%', height: 160}} source={phind} />
      </View>
      <View
        style={{
          flex: 0.3,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.titleText}>Create Account </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={styles.logoContainer}
          onPress={() => navigation.navigate('Auth')}>
          <Image style={styles.logo} source={doctor} />
          <Text style={{fontWeight: 'bold'}}>Pharmacien</Text>
        </Pressable>
        <Pressable
          style={styles.logoContainer}
          onPress={() => navigation.navigate('Search')}>
          <Image style={styles.logo} source={staticImage} />
          <Text style={{fontWeight: 'bold'}}>Utilisteur</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Compte;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    borderColor: '#04FDEE',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25,
  },
  logo: {
    width: 120,
    height: 120,
  },
  titleText: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },
  p: {
    fontSize: 25,
  },
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
    width: 60,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
