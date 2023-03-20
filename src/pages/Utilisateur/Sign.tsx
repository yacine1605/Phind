/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

import React from 'react';
import phind from '../../../imgs/phind.png';
import LoginButton from '../../../src/Components/Login';
import LogoutButton from '../../Components/Logout';
const Sign = () => {
  const {user} = useAuth0();

  const loggedIn = user !== undefined && user !== null;
  return (
    <View>
      <View style={{flex: 0, backgroundColor: 'white'}}>
        <View style={{flex: 0}}>
          <Image style={{width: '100%', height: 160}} source={phind} />
        </View>

        <View>
          <>
            {user && (
              <View>
                <Text>Logged in as {user.name}</Text>
                <View>
                  <LogoutButton />
                </View>
              </View>
            )}
            {!user && (
              <View>
                <Text>Not logged in</Text>
                <View>
                  <LoginButton />
                </View>
              </View>
            )}
          </>
        </View>
      </View>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({});
