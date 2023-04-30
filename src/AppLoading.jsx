import React, {useState, useEffect} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import styles from './styles.js';

const AppLoading = function() {
  const {height, width} = useWindowDimensions();
  const [visible, setVisible] = useState(true);

  if (visible) {
    setTimeout(function() {
      setVisible(false);
    }, 3000);
  }

  if (!visible) {
    return;
  }

  return (
    <View style={styles.loading(width, height)}>
      <Text style={styles.loadText}>
        loading...
      </Text>
      <Text style={styles.loadTextSmall}>
        ...thank you for being patient!
      </Text>
    </View>
  )
}

export default AppLoading;



