import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Admin = () => {
  return (
    <View style={styles.container}>
      <Text>Protected Admin Account Screen</Text>
    </View>
  );
};

export default Admin;