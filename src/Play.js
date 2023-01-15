import {registerRootComponent} from 'expo';
import {useRef, useEffect}     from 'react';
import {StatusBar}             from 'expo-status-bar';
import {SafeAreaView, Alert}   from 'react-native';
import Canvas                  from 'react-native-canvas';

const Play = function({canvas}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      if (ctx) {
        Alert.alert('Canvas is ready, dawg.');
      }
    }
  }, [canvasRef]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" hidden/>
      <Canvas ref={canvasRef} />
      {/* <WebView
        source={{
          uri: 'http://3.142.68.139:4001/'
        }}
        setBuiltInZoomControls={false}
        scrollEnabled={false}
        style={{margin: 0}}
      /> */}
    </SafeAreaView>
  );
};

export default Play;