

import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Messenger from './Counter';
import NewsFeed from './ColorChangerApp';
import styles from './styles';

const App = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Counter/>
      <ColorChangerApp/>
    </ScrollView>
  );
};

export default App;
