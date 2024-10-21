import { View, Text ,Button} from 'react-native'
import React from 'react'

const ColorCounter = ({color,onIncrease,onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={()=>onIncrease() } title={'Increase ${color}'} ></Button>
      <Button onPress={()=>onDecrease()}  title={'Decrease ${color}'}>{''}</Button>
    </View>
  )
}

export default ColorCounter;