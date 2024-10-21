
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const ProductDetailScreen = ({ route }) => {
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{productDetails.title}</Text>
//       <Text style={styles.description}>{productDetails.description}</Text>
//       <Text style={styles.price}>Price: ${productDetails.price}</Text>
//     </View>
//   );
// };

// export default ProductDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 16,
//   },
//   price: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });






import React, { useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../redux/slices/productSlice';
import { addProductToCart, removeProductFromCart } from '../redux/slices/cartSlice';
import LinearGradient from 'react-native-linear-gradient';

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const product = useSelector((state) => state.product.selectedProduct);
  const cart = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
   
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        dispatch(setProduct(data));
    
        // console.error('Failed to fetch product details:', error);
    
    };

    fetchProductDetails();
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const isProductInCart = cart.some(item => item.id === product.id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading product details...</Text>
      </View>
    );
  }

  return (
    <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
     style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Button
            title={isProductInCart ? "Remove from Cart" : "Add to Cart"}
            onPress={isProductInCart ? handleRemoveFromCart : handleAddToCart}
            color="#007BFF"
          />
        </View>
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
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 20,
    color: '#007BFF',
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
  gradientContainer: {
    flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
     // borderRadius: 5,
     backgroundColor: 'transparent',
    },
});

export default ProductDetailScreen;


