import {registerRootComponent}       from 'expo';
import {useFonts}                    from 'expo-font';
import {useState, useRef, useEffect} from 'react';
import {StatusBar}                   from 'expo-status-bar';
import * as rn                       from 'react-native';
import {WebView}                     from 'react-native-webview';
import Canvas                        from 'react-native-canvas';

import loadAll                       from './util/loadImages.js';
import Game                          from './Game/Game.js';

var images = {};

const App = function() {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const {height, width}  = rn.useWindowDimensions();

  const [fonts] = useFonts({
    Jost: require('../assets/fonts/Jost.ttf'),
  });

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      ctx.canvas.width = width;
      ctx.canvas.height = height;

      if (ctx) {
        images = loadAll(canvasRef.current, setReady);
      }
    }
  }, [canvasRef]);

  useEffect(function() {
    if (!ready) {
      return;
    }

    Game.gameLoop(canvasRef.current, images);
  }, [ready]);

  return (
    <rn.SafeAreaView width={width} height={height} style={{flex: 0}}>
      <StatusBar style="auto" hidden/>
      <Canvas
        ref={canvasRef}
        style={{
          flex: 0,
          margin: 0,
          resizeMode: 'contain'
      }}/>
    </rn.SafeAreaView>
  );

};

registerRootComponent(App);

export default App;