/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import user from '../../../imgs/user.png';
import profile from '../../../imgs/profile.png';
import history from '../../../imgs/history.png';
import logout from '../../../imgs/logout.png';
const Setting = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
        <Image source={user} />
        <Text>Information</Text>
      </View>
      <View style={{flex: 1, margin: 15}}>
        <Text
          style={{
            flex: 0.1,
            margin: 5,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Parametre Profile
        </Text>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: 'black',
            width: 260,
            padding: 10,
            margin: 5,
            flex: 0.1,
            borderRadius: 15,
          }}
          onPress={() => navigation.navigate('Profile')}>
          <Image source={profile} />
          <Text style={{paddingLeft: 14, fontSize: 16}}>
            Information Profile
          </Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: 'black',
            width: 260,
            padding: 10,
            margin: 5,
            flex: 0.1,
            borderRadius: 15,
          }}>
          <Image source={history} />
          <Text style={{paddingLeft: 14, fontSize: 16}}>Historique</Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: 'black',
            width: 260,
            padding: 10,
            margin: 5,
            flex: 0.1,
            borderRadius: 15,
          }}>
          <Image source={logout} />

          <Text style={{paddingLeft: 14, fontSize: 16}}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
