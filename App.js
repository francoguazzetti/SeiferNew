import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const services = [
  { key: 'ride', title: 'Viaje' },
  { key: 'food', title: 'Comida' },
  { key: 'package', title: 'Envío' },
  { key: 'market', title: 'Mercado' },
  { key: 'reserve', title: 'Reservas' },
  { key: 'bike', title: 'Bicicletas' },
];

function GridScreen() {
  return (
    <FlatList
      data={services}
      numColumns={2}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.grid}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

function MapScreen() {
  return (
    <View style={styles.mapContainer}>
      <MapView style={StyleSheet.absoluteFillObject} />
    </View>
  );
}

function UserScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Perfil de Usuario</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Servicios" component={GridScreen} />
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Usuario" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  grid: {
    padding: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    height: 100,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cardText: {
    fontSize: 18,
  },
  mapContainer: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
});
