/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';

const Liste = () => {
  const info = useQuery({
    queryKey: ['todos'],
    queryFn: () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'd6edb07fd4msh4d8ca3d2f9b7691p1b1cf1jsn21001e2a3478',
          'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com',
        },
      };

      fetch(
        'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil',
        options,
      )
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    },
  });
  if (info.isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <>
      {info.data.map((el: any) => {
        return <View>{el.application_number}</View>;
      })}
    </>
  );
};
//
export default Liste;

//const styles = StyleSheet.create({});
