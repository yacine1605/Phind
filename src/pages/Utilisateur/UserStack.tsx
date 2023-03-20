/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from './Search';
import Sign from './Sign';
import Setting from './Setting';
import Profile from './Profile';

const UserStack = createNativeStackNavigator();

export function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="Home"
        component={Sign}
        options={{headerShown: false}}
      />
      <UserStack.Screen name="Setting" component={Setting} />
      <UserStack.Screen name="Profile" component={Profile} />
      <UserStack.Screen name="Search" component={Search} />
    </UserStack.Navigator>
  );
}
