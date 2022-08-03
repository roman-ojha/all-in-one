import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  // StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View>
      <Text>{title}</Text>
      {children}
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Section title="Hello World">
        <Text>Children</Text>
      </Section>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default App;
