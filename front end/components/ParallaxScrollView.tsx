import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

type ParallaxScrollViewProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export function ParallaxScrollView({ header, children }: ParallaxScrollViewProps) {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      scrollEventThrottle={16}
      style={styles.scrollView}>
      <View style={styles.headerContainer}>
        {header}
      </View>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});