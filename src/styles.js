var styles = {
  vCenter: function(w, h) {
    return {
      flexDirection: 'column',
      justifyContent: 'center',
      width: w,
      height: h
    }
  },
  main: function(fonts, w, h) {
    return {fontFamily: fonts.Jost, width: w, height: h}
  },
  loading: function(w, h) {
    return {
      ...styles.vCenter(w, h),
      backgroundColor: 'rgb(70, 32, 21)'
    }
  },
  loadText: {
    fontSize: 48,
    color: '#e2bab5',
    textAlign: 'center'
  },
  loadTextSmall: {
    marginTop: '20%',
    fontSize: 16,
    color: '#e2bab5',
    textAlign: 'center'
  },
  menu: {
    view: {
      zIndex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '100%'
    },
    button: {
      marginBottom: 2,
      width: '100%',
      aspectRatio: 33/7,
      padding: 2,
      paddingLeft: 4
    },
    buttonBg: {
      height: '100%',
      aspectRatio: 5/1,
      alignSelf: 'center'
    },
    buttonText: {
      position: 'absolute',
      top: '10%',
      fontWeight: 'bold',
      color: 'rgb(70, 32, 21)',
      alignSelf: 'center',
      fontSize: 48
    }
  },
  play: {
    view: {
      zIndex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '100%'
    },
    buttonContainer: {
      height: '33%',
      flexDirection: 'column'
    },
    mathButtons: {
      marginLeft: 9,
      marginRight: 8,
      flexDirection: 'row',
      alignItems: 'center',
      height: '30%'
    },
    mathButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '90%',
      aspectRatio: 1/1,
      margin: 1
    },
    mathButtonImg: {
      height: '90%',
      aspectRatio: 1/1
    },
    mathSelectImg: {
      height: '110%',
      aspectRatio: 1/1
    },
    expression: {
      width: '31%',
      marginLeft: 3,
      aspectRatio: 280/135
    },
    expressionImg: {
      width: '100%',
      aspectRatio: 280/135,
      resizeMode: 'contain',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    expressionText: {
      width: '100%',
      color: 'rgb(70, 32, 21)',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    playButtons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: 2
    },
    button: {
      width: '20%',
      aspectRatio: 1/1,
      padding: 0
    },
    buttonBg: {
      height: '100%',
      aspectRatio: 1/1,
      alignSelf: 'center'
    },
    buttonText: {
      position: 'absolute',
      top: '10%',
      fontWeight: 'bold',
      color: 'rgb(70, 32, 21)',
      alignSelf: 'center',
      fontSize: 48
    }
  },
  absolute: {position: 'absolute'}
};

export default styles;