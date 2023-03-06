import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './screens/Landing';
import HomeScreen from './screens/Home';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';


import { Button } from 'react-native';


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
          <RootStack.Screen name="Home" component={HomeScreen} 
          //? we add options for logout with header
          options={{
            headerRight: () => (
              <Button onPress={handleSignOut} title="Sign Out" />
            ),
          }} 
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
          </>
        )}

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;