/* eslint-disable prettier/prettier */
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import user from '../../../imgs/user.png';
const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
        <Image source={user} />
        <Text>Information</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 18,
            margin: 5,
            fontWeight: 'bold',
            width: 328,
            height: 32,
          }}>
          Information
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}>
        <Text style={styles.label}>Nom</Text>
        <TextInput style={styles.placeholder}>Bouzir</TextInput>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
        <Text style={styles.label}>Prenom</Text>
        <TextInput style={styles.placeholder}>Abdallah</TextInput>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
        <Text style={styles.label}>Date de naissence</Text>
        <TextInput style={styles.placeholder}>1989/12/15</TextInput>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.placeholder}>abd@gamil.com</TextInput>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
        <Text style={styles.label}>Sexe</Text>
        <TextInput style={styles.placeholder}>Homme</TextInput>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={{
            backgroundColor: '#04FDEE',
            padding: 15,
            width: 250,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 35}}>Enregister</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  placeholder: {
    fontSize: 23,
    fontWeight: 'bold',
    width: 328,
    height: 45,
    alignContent: 'center',
    borderRadius: 5,
    backgroundColor: '#D0F5F3',
    color: 'black',
  },
  label: {
    width: 328,
    height: 32,
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: '#5B5959',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#04FDEE',
    color: 'white',
  },
});
