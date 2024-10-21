import {
    Pressable,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Easing,
    Animated,
    Text,
  } from 'react-native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import React, {useEffect, useRef} from 'react';
import { useTheme } from '@react-navigation/native';
  import {COLORS} from '../config/constants';
  
  const {width} = Dimensions.get('window');
  const MARGIN = 16;
  const TAB_BAR_WIDTH = width;
  const TAB_WIDTH = TAB_BAR_WIDTH / 4;
  
  const CustomBottomTab = ({state, descriptors, navigation}) => {
    const theme = useTheme();
  
    const flexValues = state.routes.map((_, index) => {
      return state.index === index ? 1 : 0.5;
    });
  
    const translateX = useRef(new Animated.Value(0)).current;
  
    const translateTab = index => {
      Animated.spring(translateX, {
        toValue: index * (TAB_BAR_WIDTH * 0.4),
        useNativeDriver: true,
      }).start();
    };
  
    useEffect(() => {
      translateTab(state.index);
    }, [state.index]);
  
    return (
      <View
        style={{
          ...styles.bar,
          backgroundColor: theme.colors.background,
           shadowColor: theme.colors.secondary,
        }}>
        <Animated.View
          style={[
            styles.slidingTabContainer,
            {
              width: TAB_BAR_WIDTH * 0.6,
            },
          ]}>
          <Animated.View
            style={[
              styles.slidingTab,
              {
                 backgroundColor: theme.colors.primary,
                transform: [{translateX}],
              },
            ]}></Animated.View>
        </Animated.View>
  
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{...styles.tab, flex: flexValues[index]}}>
              <TabIcon
                isFocused={isFocused}
                // icon={options.tabBarIcon}
                label={label}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  
  const TabIcon = ({isFocused, icon, label}) => {
    return (
      <View style={styles.tabButton}>
        <View>
          <MaterialCommunityIcons
            // name={isFocused ? icon : icon + '-outline'}
            name={icon}
            size={22}
             color={isFocused ? COLORS.WHITE : COLORS.GREY}
          />
        </View>
        {isFocused && (
          <Text
            style={{
               color: isFocused ? COLORS.WHITE : COLORS.GREY,
              marginLeft: 2,
              fontFamily: 'WorkSans-SemiBold',
              fontSize: 12,
            }}>
            {label}
          </Text>
        )}
      </View>
    );
  };
  
  export default CustomBottomTab;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
    },
    bottomView: {
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
    },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      width: TAB_BAR_WIDTH,
      height: 60,
      // position: 'absolute',
      alignSelf: 'center',
      // bottom: MARGIN,
      // backgroundColor: '#FFF',
      // borderRadius: 10,
      justifyContent: 'space-around',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    slidingTabContainer: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
    },
    slidingTab: {
      width: '90%',
      height: '90%',
      borderRadius: 100,
    },
    tabButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  