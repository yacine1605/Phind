/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface SplashProps {
  onFinish: () => void;
}

const Splash: React.FC<SplashProps> = ({onFinish}) => {
  useEffect(() => {
    setTimeout(() => {
      // onFinish();
    }, 1000);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../imgs/sick.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Splash;
