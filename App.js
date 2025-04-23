import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import app from './firebaseConfig'; // Import the initialized app
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { styles, PRIMARY_COLOR, CARD_BG, BG_COLOR } from './styles-app';

const db = getFirestore(app);

export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback menu items for demo/empty Firestore
  const fallbackMenu = [
    {
      id: '1',
      name: 'Classic Burger',
      description: 'Juicy beef patty, cheddar cheese, lettuce, tomato, and our special sauce.',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '2',
      name: 'Margherita Pizza',
      description: 'Stone-baked pizza with fresh mozzarella, basil, and tomato sauce.',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '3',
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls with salmon, tuna, avocado, and cucumber.',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '4',
      name: 'Caesar Salad',
      description: 'Crisp romaine, parmesan, croutons, and Caesar dressing.',
      price: 6.49,
      image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '5',
      name: 'Chicken Tikka Masala',
      description: 'Tender chicken in creamy tomato curry, served with basmati rice.',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '6',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with gooey molten center and vanilla ice cream.',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '7',
      name: 'Bubble Tea',
      description: 'Refreshing milk tea with chewy tapioca pearls.',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '8',
      name: 'French Fries',
      description: 'Crispy golden fries with ketchup and mayo.',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '9',
      name: 'Veggie Wrap',
      description: 'Whole wheat wrap with grilled veggies and hummus.',
      price: 6.49,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '10',
      name: 'Berry Smoothie',
      description: 'Blend of strawberries, blueberries, and yogurt.',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    },
  ];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menuCol = collection(db, 'menu');
        const menuSnapshot = await getDocs(menuCol);
        let menuList = menuSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), quantity: 1 }));
        if (!menuList.length) menuList = fallbackMenu;
        setMenuItems(menuList);
        setLoading(false);
      } catch (err) {
        setMenuItems(fallbackMenu);
        setError(null); // fallback disables error
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, item];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const placeOrder = async () => {
    try {
      await addDoc(collection(db, 'orders'), {
        items: cart,
        createdAt: new Date().toISOString()
      });
      setCart([]);
      alert('Order placed successfully!');
    } catch (err) {
      alert('Failed to place order.');
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) return (
    <View style={styles.centered}><ActivityIndicator size="large" color={PRIMARY_COLOR} /></View>
  );
  if (error) return (
    <View style={styles.centered}><Text style={styles.errorText}>{error}</Text></View>
  );

  // Header and Cart as components for FlatList
  const ListHeader = () => (
    <>
      <View style={styles.headerBar}>
        <Image source={{ uri: 'https://img.icons8.com/color/96/000000/restaurant.png' }} style={styles.logoIcon} />
        <Text style={styles.headerText}>Mini Food App</Text>
      </View>
      <Text style={styles.sectionTitle}>Menu</Text>
    </>
  );

  const ListFooter = () => (
    <>
      <Text style={styles.sectionTitle}>Cart</Text>
      <View style={styles.cartPanel}>
        {cart.length === 0 ? (
          <Text style={{ color: '#888', fontStyle: 'italic' }}>Your cart is empty.</Text>
        ) : (
          cart.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Text style={styles.cartName}>{item.name}</Text>
              <View style={styles.cartControls}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  <Text style={styles.qtyButtonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.qtyInput}
                  keyboardType="numeric"
                  value={item.quantity.toString()}
                  onChangeText={(text) => updateQuantity(item.id, parseInt(text) || 1)}
                />
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Text style={styles.qtyButtonText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.cartSubtotal}>${(item.price * item.quantity).toFixed(2)}</Text>
              </View>
            </View>
          ))
        )}
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        <TouchableOpacity
          style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
          onPress={placeOrder}
          disabled={cart.length === 0}
        >
          <Text style={styles.placeOrderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BG_COLOR }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={menuItems}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.menuRow}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.menuImage} />
            <Text style={styles.menuName}>{item.name}</Text>
            <Text style={styles.menuDesc}>{item.description}</Text>
            <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
              <Text style={styles.addButtonText}>Add to Cart 🍽️</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
      />
    </SafeAreaView>
  );
}
