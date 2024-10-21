// import * as React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import ToDoListScreen from '../screens/ToDoListScreen';
// // import UpdateScreen from '../screens/UpdateScreen';
// import {StyleSheet} from 'react-native';
// import HomeScreen from '../screens/HomeScreen';
// import SplashScreen from '../screens/SplashScreen';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {useTheme} from '@react-navigation/native';
// import CustomBottomTab from '../Components/CustomBottomTab';
// import SearchScreen from '../screens/SearchScreen';
// // import Icon from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();

// const TabNavigation = () => {
//   const Tab = createBottomTabNavigator();
//   const theme = useTheme();
//   //  return(
//   //     <Tab.Navigator
//   //   screenOptions={({ route }) => ({
//   //     tabBarIcon: ({ focused, color, size }) => {
//   //       let iconName;
//   //       if (route.name === 'Home') {
//   //         iconName = focused ? 'home' : 'home-outline';
//   //       } else if (route.name === 'ToDoList') {
//   //         iconName = focused ? 'list' : 'list-outline';
//   //       } else if (route.name === 'Update') {
//   //         iconName = focused ? 'update' : 'update-outline';
//   //       } else if (route.name === 'SplasScreen') {
//   //             iconName = focused ? 'account' : 'account-outline';
//   //           }

//   //       return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
//   //     },
//   //   })}
//   //   tabBarOptions={{
//   //     activeTintColor: 'tomato',
//   //     inactiveTintColor: 'gray',
//   //     "tabBarStyle": [
//   //     {
//   //       "display": "flex"
//   //     },
//   //     null
//   //   ]
//   //   }}
//   // >
//   //   <Tab.Screen name="Home" component={HomeScreen}
//   //   options={{
//   //           tabBarLabel: 'Home',
//   //         }}
//   // //  options={{
//   // //           tabBarLabel: 'Home',
//   // //           tabBarIcon: ({ color, size }) => (
//   // //             <MaterialCommunityIcons name="home" color={'blue'} size={size} />
//   // //           ),
//   // //         }}
//   //    />
//   //   <Tab.Screen name="ToDoList" component={ToDoListScreen}
//   //      options={{
//   //           tabBarLabel: 'ToDoList',
//   //           tabBarIcon: ({ color, size }) => (
//   //             <MaterialCommunityIcons name="bell" color={color} size={size} />
//   //           ),
//   //           tabBarBadge: 3,
//   //         }}
//   //   />
//   //   <Tab.Screen name="Update" component={UpdateScreen}

//   //   />
//   //   <Tab.Screen name="Profile" component={SplashScreen}
//   //    options={{
//   //           tabBarLabel: 'Profile',
//   //         }}

//   //    />
//   // </Tab.Navigator>
//   //  )
//   return (
//     <Tab.Navigator
//       tabBar={props => <CustomBottomTab {...props} />}
//       screenOptions={{
//         headerShown: false,
//         // tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: theme.colors.background,
//           shadowColor: theme.colors.tertiary,
//           shadowOffset: {
//             width: 0,
//             height: 12,
//           },
//           shadowOpacity: 0.58,
//           shadowRadius: 16.0,
//           elevation: 24,
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: 'home-outline',
//         }}
//       />

//       {/* <Tab.Screen
//       name="Update"
//       component={UpdateScreen}
//       options={{
//         title: 'Collections',
//         tabBarIcon: 'view-dashboard-outline',
//       }}
//     /> */}

//       <Tab.Screen
//         name="ToDoList"
//         component={ToDoListScreen}
//         options={{
//           tabBarIcon: 'cart-outline',
//         }}
//       />

//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           tabBarIcon: 'cart-outline',
//         }}
//       />

//       <Tab.Screen
//         name="Splash"
//         component={SplashScreen}
//         options={{
//           tabBarIcon: 'account-outline',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigation;

// const styles = StyleSheet.create({});


import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomBottomTab from '../Components/CustomBottomTab';
import ProductListScreen from '../screens/ProductListScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTab {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          shadowColor: theme.colors.tertiary,
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'ProductList') {
            iconName = 'view-list'; 
          } else if (route.name === 'Cart') {
            iconName = 'cart-outline'; 
          }

          return <MaterialCommunityIcons name={'home'} color={color} size={25} />;
        },
      }}
    >
      <Tab.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarLabel: 'Cart' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
