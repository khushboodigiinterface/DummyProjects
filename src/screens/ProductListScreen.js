// /src/screens/Product/ProductListScreen.js
// /src/screens/Product/ProductListScreen.js
// import React, { useEffect } from 'react';
// import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { setProductList } from '../redux/slices/productSlice';

// const ProductListScreen = () => {
//   const { productList } = useSelector((state) => state.product);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         console.log('Fetched products:', data); // Log the fetched data
//         dispatch(setProductList(data)); // Update Redux state with fetched data
//       } catch (error) {
//         console.error('Failed to fetch products:', error);
//       }
//     };

//     fetchProducts();
//   }, [dispatch]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={productList}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.productItem}>
//             <Image source={{ uri: item.image }} style={styles.productImage} />
//             <Text style={styles.productTitle}>{item.title}</Text>
//             <Text style={styles.productPrice}>${item.price}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default ProductListScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//     },
//     productItem: {
//       marginBottom: 16,
//       borderWidth: 1,
//       borderColor: '#ddd',
//       borderRadius: 8,
//       overflow: 'hidden',
//       padding: 8,
//       backgroundColor: '#fff',
//     },
//     productImage: {
//       width: '100%',
//       height: 200,
//       resizeMode: 'cover',
//     },
//     productTitle: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginVertical: 8,
//     },
//     productPrice: {
//       fontSize: 16,
//       color: '#888',
//     },
//   });
  

import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setProductList } from '../redux/slices/productSlice';
import LinearGradient from 'react-native-linear-gradient';

const ProductListScreen = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    const fetchProducts = async () => {
    
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch(setProductList(data));
   
        // console.error('Failed to fetch products:', error);
   
    };

    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
   
    const result = productList.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(result);
  }, [searchQuery, productList]);

  return (
    <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
     style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <Button title="Search" onPress={() => { }} color="#007BFF" />
        </View>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.productItem} 
              onPress={() => navigation.navigate('ProductDetailScreen', { productId: item.id })}
            >
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    backgroundColor: '#ffffff',
  },
  productItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#007BFF',
  },
  backgroundColor:{

  },
  gradientContainer: {
   flex: 1,
     paddingLeft: 15,
     paddingRight: 15,
    // borderRadius: 5,
    backgroundColor: 'transparent',
   },
});

export default ProductListScreen;

