import React, {useState, useEffect} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import styles from './styles.js';

const AppLoading = function({loaded}) {
  const {height, width} = useWindowDimensions();
  const [visible, setVisible] = useState(true);

  if (loaded && visible) {
    setTimeout(function() {
      setVisible(false);
    }, 2500);
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



