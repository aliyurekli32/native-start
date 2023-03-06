
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Protected Home Screen</Text>
      <Button
        title="Go to Land"
        onPress={() => navigation.navigate('Landing')}
      />
    </View>
  );
};

export default HomeScreen;