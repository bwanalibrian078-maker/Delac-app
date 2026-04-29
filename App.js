import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Screens
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Dashboard from './screens/Dashboard';
import SubjectScreen from './screens/SubjectScreen';
import LessonScreen from './screens/LessonScreen';
import AdminDashboard from './screens/AdminDashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#003366', // Deep Blue branding
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Emily Institute' }} />
        <Stack.Screen name="Subject" component={SubjectScreen} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name="Lesson" component={LessonScreen} options={({ route }) => ({ title: route.params.title })} />
        <Stack.Screen name="Admin" component={AdminDashboard} options={{ title: 'Admin Panel' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
