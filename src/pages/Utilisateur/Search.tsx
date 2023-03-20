/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Map from '../../Components/Map';

const Search = ({navigation}: any) => {
  const [search, setSearch] = useState<string>('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        hideNavigationBar: 'true',
        placeholder: 'search',
        onChangeText: (e: any) => setSearch(e.nativeEvent.text),
      },
    });
  }, [navigation]);
  return (
    <View>
      <View style={{flex: 0, backgroundColor: 'red'}} />
      <Text>{search}</Text>
      <Map />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
