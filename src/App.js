import { useState } from 'react';


import { NavigationContainer,
         DrawerActions,
         getFocusedRouteNameFromRoute, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LandingScreen from './screens/Landing';
import HomeScreen from './screens/Home';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import PasswordForgetScreen from './screens/PasswordForget';
import PasswordChange from './screens/PasswordChange';
import Account from './screens/Account';
import Admin from './screens/Admin';

import { Button } from 'react-native';






const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};




const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="PasswordChange" component={PasswordChange} />
      <Drawer.Screen
        name="Password Forget"
        component={PasswordForgetScreen}
      />
      <Drawer.Screen name="Admin" component={Admin} />
    </Drawer.Navigator>
  );
};



const RootStack = createStackNavigator();

const App = () => {
  const [isAuth, setIsAuth]=useState(false)

  const handleSignIn = () =>{
    // TODO implement real sign in mechanism
    setIsAuth(true);
  }

  const handleSignOut = () => {
    // TODO implement real sign out mechanism

    setIsAuth(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign up mechanism

    setIsAuth(true);
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator>
      {isAuth ? (
        //! Authenticated Home
          <RootStack.Screen name="Home" component={HomeDrawer} 
          //? we add options for logout with header
          options={({ route, navigation }) => ({
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerLeft: () => (
              <Button
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
                title="Menu"
              />
            ),
            headerRight: () => (
              <Button onPress={handleSignOut} title="Sign Out" />
            ),
          })} 
          />
        //! Authenticated Home
        ) : (
          <>
            <RootStack.Screen
              name="Landing"
              component={LandingScreen}
              //? added for signout back animation
              options={{
                animationTypeForReplace: 'pop',
              }}
            />

            {/* //? ******------SIGN IN AND SIGN UP--------***** */}
            <RootStack.Screen name="Sign In">
              {(props) => (
                <SignInScreen {...props} onSignIn={handleSignIn} />
              )}
            </RootStack.Screen>

            <RootStack.Screen name="Sign Up">
              {(props) => (
                <SignUpScreen {...props} onSignUp={handleSignUp} />
              )}
            </RootStack.Screen>
            {/* //? ******------SIGN IN AND SIGN UP--------***** */}
          

            <RootStack.Screen
              name="Password Forget"
              component={PasswordForgetScreen}
            />
          </>
        )}

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;