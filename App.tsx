/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Auth0Provider, useAuth0} from 'react-native-auth0';

//import type {PropsWithChildren} from 'react';
import Auth from './src/pages/Auth';
import Home from './src/pages/Home';
import Compte from './src/pages/Compte';
import Settings from './src/pages/Utilisateur/Setting';
import Assistance from './src/pages/Utilisateur/Assistance';
import {PharStackScreen} from './src/pages/Pharmacien/PharStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const queryClient = new QueryClient();
import Sign from './src/pages/Utilisateur/Sign';
import {UserContext} from './contexte';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const [Data, setData] = useState(true);
  const {authorize} = useAuth0();

  try {
    authorize();
  } catch (e) {
    console.log(e);
  }

  return (
    <Auth0Provider
      domain={'dev-bvnd67j7bdky5jak.us.auth0.com'}
      clientId={'j5O7cz0JL5KgPyFjQdZveNdtFeTUUArO'}>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{Data, setData}}>
          <NavigationContainer>
            {Data ? (
              <>
                {console.log('Data')}
                <Tab.Navigator>
                  <Tab.Screen
                    name="Home"
                    component={PharStackScreen}
                    options={{headerShown: false}}
                  />
                  <Tab.Screen name="Setting" component={Settings} />
                  <Tab.Screen name="Assistance" component={Assistance} />
                </Tab.Navigator>
              </>
            ) : (
              <>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="Compte"
                    component={Compte}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="Sign"
                    component={Sign}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{headerShown: false}}
                  />
                </Stack.Navigator>
              </>
            )}
          </NavigationContainer>
        </UserContext.Provider>
      </QueryClientProvider>
    </Auth0Provider>
  );
}
/*
<NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Compte" component={Compte} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false, // change this to `false`
              }}
            />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Liste" component={Liste} />
          </Stack.Navigator>
        </NavigationContainer>*/
export default App;
