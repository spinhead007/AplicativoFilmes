import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Cadastro from './src/pages/Cadastro'; // Importe a tela Cadastro
import Outros from './src/pages/Outros'; // Importe a tela Outros
import Filmes from './src/pages/Filmes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Filmes" component={Filmes} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Outros" component={Outros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
