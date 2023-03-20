/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, Text, View} from 'react-native';

function HomeScreen({navigation}: any): JSX.Element {
  return (
    <>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7CE2C3',
        }}>
        <Text style={{width: 149, height: 63, fontSize: 60, color: 'white'}}>
          Ph ind
        </Text>
        <Text style={{color: 'white', height: 13}}>Find your pharmacy</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          onPress={() => navigation.navigate('Auth')}
          style={{
            marginTop: 150,
            backgroundColor: '#7CE2C3',
            height: 96,
            width: 242,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
          }}>
          <Text style={{color: 'white', fontSize: 48}}>get started</Text>
        </Pressable>
      </View>
    </>
  );
}
export default HomeScreen;
