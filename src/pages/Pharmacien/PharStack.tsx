/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../Utilisateur/Search';
import Profile from '../Utilisateur/Profile';
import Home from '../Home';
import Compte from '../Compte';
import Sign from '../Utilisateur/Sign';
import Auth from '../Auth';

const PharStack = createNativeStackNavigator();

export function PharStackScreen() {
  return (
    <PharStack.Navigator>
      <PharStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <PharStack.Screen name="Search" component={Search} />
      <PharStack.Screen name="Profile" component={Profile} />

      <PharStack.Screen
        name="Compte"
        component={Compte}
        options={{headerShown: false}}
      />
      <PharStack.Screen
        name="Sign"
        component={Sign}
        options={{headerShown: false}}
      />
      <PharStack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
    </PharStack.Navigator>
  );
}
