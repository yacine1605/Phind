/* eslint-disable prettier/prettier */ /* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import telephone from '../../../imgs/telephone2.png';
import messenger from '../../../imgs/messenger.png';
import email from '../../../imgs/email.png';

const Assistance = () => {
  return (
    <View style={{flex: 0.9, margin: 30, justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', flex: 0.1}}>
        <View>
          <Image
            style={{
              borderColor: '#D0F5F3',
              borderRadius: 25,
              borderWidth: 1,
              backgroundColor: '#D0F5F3',
            }}
            source={messenger}
          />
        </View>
        <View style={{paddingLeft: 10}}>
          <Text>Chat</Text>
          <Text>Chat instantané avec Phind</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.1,
        }}>
        <View>
          <Image source={telephone} />
        </View>
        <View style={{paddingLeft: 10}}>
          <Text>Numero Telephone</Text>
          <Text>24h/24</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', flex: 0.2}}>
        <View>
          <Image source={email} />
        </View>
        <View style={{paddingLeft: 10}}>
          <Text>Contact</Text>
          <Text>Des response à Vos Questions </Text>
        </View>
      </View>
    </View>
  );
};

export default Assistance;

const styles = StyleSheet.create({});
