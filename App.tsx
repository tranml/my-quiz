import { StatusBar } from 'expo-status-bar';
import React from 'react';
import QuizScreen from './src/app/QuizScreen';

export default function App() {
  return (
    <>
      <QuizScreen />
      <StatusBar style="auto" />
    </>
  );
}

