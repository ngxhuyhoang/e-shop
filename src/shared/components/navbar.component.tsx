import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface INavbarProps {
  title?: string;
  leadingComponent?: ReactNode;
  trailingComponent?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
}

const Navbar = ({
  title,
  trailingComponent,
  leadingComponent,
  children,
  style,
}: INavbarProps) => {
  const navigation = useNavigation<any>();
  const { width: screenWidth } = useWindowDimensions();

  const renderTrailing = () => {
    if (trailingComponent) {
      return trailingComponent;
    }
    return <View />;
  };

  const renderLeading = () => {
    if (leadingComponent) {
      return leadingComponent;
    }
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}>
        <Icon name="arrow-left" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { width: screenWidth }, style]}>
      {renderLeading()}
      <View style={styles.title}>
        {title && (
          <Text numberOfLines={1} style={styles?.textTitle}>
            {title}
          </Text>
        )}
        {!!children && children}
      </View>
      {renderTrailing()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    backgroundColor: 'white',
  },
  backButton: {
    width: 50,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 16,
    //backgroundColor: 'blue',
  },
  title: {
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: -1,
  },
  textTitle: {
    maxWidth: '80%',
    fontSize: 18,
  },
});

export default Navbar;
