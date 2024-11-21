import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { CustomText } from '@/components/CustomText';
import { CustomView } from '@/components/CustomView';
import { Colors } from '@/constants/Colors';

export function ToggleSection({ children, title }: { children: React.ReactNode; title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <CustomView>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setIsOpen(prev => !prev)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <CustomText variant="semiBold">{title}</CustomText>
      </TouchableOpacity>
      {isOpen && <CustomView style={styles.body}>{children}</CustomView>}
    </CustomView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  body: {
    marginTop: 6,
    marginLeft: 24,
  },
});