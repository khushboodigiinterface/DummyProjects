
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const HomeScreen = ({ navigation }) => {
  
//   return (
//     <View style={styles.container}>
//      <TouchableOpacity
//         onPress={()=>navigation.navigate('ToDoListScreen')}      
//         style={styles.button1}
//       >
//         <Text style={styles.buttonText}>Go to ToDoListScreen</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={()=>navigation.navigate('FlatListScreen')}      
//         style={styles.button}
//       >
//         <Text style={styles.buttonText}>Go to FlatList</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={()=>navigation.navigate('ColorScreen')}      
//         style={styles.button3}
//       >
//         <Text style={styles.buttonText}>Go to ColorScreen</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={()=>navigation.navigate('UpdateScreen')}      
//         style={styles.button4}
//       >
//         <Text style={styles.buttonText}>Go to UpdateScreen</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={()=>navigation.navigate('TabNavigation')}      
//         style={styles.button4}
//       >
//         <Text style={styles.buttonText}>Go to TabNavigation</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button1: {
//     padding: 15,
//     backgroundColor: 'green',
//     borderRadius: 5,
//   },
//   button3: {
//     padding: 15,
//     backgroundColor: 'pink',
//     borderRadius: 5,
//     marginTop:20
//   },
//    button4: {
//     padding: 15,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//     marginTop:20
//   },
//    button: {
//     padding: 15,
//     backgroundColor: 'skyblue',
//     borderRadius: 5,
//     marginTop:10
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

//```

import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/slices/authSlice';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();
      console.log('Response:', response); 
      console.log('Data:', data); 

      if (response.ok) {
        dispatch(setToken(data.token)); 
        navigation.navigate('ProductListScreen'); 
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Error:', err); 
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
