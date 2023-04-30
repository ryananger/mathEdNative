import {registerRootComponent}       from 'expo';
import {useFonts}                    from 'expo-font';
import {StatusBar}                   from 'expo-status-bar';
import {useState, useRef, useEffect} from 'react';
import {ImageBackground}             from 'react-native';
import {SafeAreaView}                from 'react-native';
import {useWindowDimensions}         from 'react-native';
import {WebView}                     from 'react-native-webview';
import Canvas                        from 'react-native-canvas';

import styles     from './styles.js';
import sources    from './util/sourceImages.js';
import loadAll    from './util/loadImages.js';
import Game       from './Game/Game.js';
import AppLoading from './AppLoading.jsx';
import MenuUI     from './components/MenuUI.jsx';
import PlayUI     from './components/PlayUI.jsx';

var images = {};
var ctx;

const App = function() {
  const bg = sources.bgImages[0];
  const canvasRef = useRef(null);

  const [updates, updateReact] = useState(0);
  const updateInterval = 50;

  const [view, setView]   = useState('menu');
  const [ready, setReady] = useState(false);
  const {height, width}   = useWindowDimensions();
  const fonts = useFonts({Jost: require('../assets/fonts/Jost.ttf')});

  var reactLoop = function() {
    if (!Game.playing) {
      return;
    }

    setTimeout(function() {
      updateReact(updates + 1);
    }, updateInterval);
  };

  var mountCanvas = function() {
    if (canvasRef.current) {
      ctx = canvasRef.current.getContext('2d');

      ctx.canvas.width  = width;
      ctx.canvas.height = height;

      if (ctx) {
        images = loadAll(canvasRef.current, setReady);
      }
    }
  };

  var gameLoop = function() {
    Game.setView = setView;
    Game.width   = width;
    Game.height  = height;

    Game.gameLoop(ctx, images.canvasImages);
  };

  useEffect(mountCanvas, [canvasRef]);
  useEffect(reactLoop, [updates, Game.playing]);
  useEffect(gameLoop, [ready]);

  return (
    <SafeAreaView style={styles.main(fonts, width, height)}>
      <StatusBar style="auto" hidden/>
      <AppLoading />
      <ImageBackground source={bg}>
        <MenuUI Game={Game} style={styles.absolute} hidden={view !== 'menu'}/>
        <PlayUI Game={Game} style={styles.absolute} hidden={view !== 'play'}/>

        <Canvas ref={canvasRef} style={styles.absolute}/>
      </ImageBackground>
    </SafeAreaView>
  );
};

registerRootComponent(App);

export default App;