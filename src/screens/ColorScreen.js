// import {View, Text, TextInput, StyleSheet} from 'react-native';
// import React, { useState } from 'react';
// import ColorCounter from '../Components/ColorCounter';

// const ColorScreen = () => {

//     const COLOR_INCREAMENT=15;

//   const [red, SetRed] = useState(0);
//   const [yellow, SetYellow] = useState(0);
//   const [green, SetGreen] = useState(0);

//   return (
//     <View>
    
//         <ColorCounter
//           onIncrease={() => SetRed(red + COLOR_INCREAMENT)}
//           onDecrease={() => SetRed(red - COLOR_INCREAMENT)}
//           color="Red"
//         />
//         <ColorCounter
//           onIncrease={() => SetYellow(yellow + COLOR_INCREAMENT)}
//           onDecrease={() => SetYellow(yellow - COLOR_INCREAMENT)}
//           color="Yellow"
//         />
//         <ColorCounter
//           onIncrease={() => SetGreen(green + COLOR_INCREAMENT)}
//           onDecrease={() => SetGreen(green - COLOR_INCREAMENT)}
//           color="Green"
//         />

//         <View
//           style={{
//             height: 150,
//             width: 150,
//             backgroundColor: `rgb(${red},${yellow},${green})`,
//           }}></View>
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           placeholder="hello"
//         />
//       </View>
  
//   );
// };

// export default ColorScreen;

// const styles = StyleSheet.create({
   
//   });
