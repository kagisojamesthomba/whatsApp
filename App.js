import 'react-native-gesture-handler';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppNavigator from './navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
          'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
          'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
          'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
          'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
          'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
          'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
          'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
          'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
          'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
        }); // load fonts
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayout}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
