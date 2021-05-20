declare module '*.scss' {
  import { StyleProp, TextStyle, ViewStyle, ImageStyle } from 'react-native';

  const styles: Record<string, StyleProp<ViewStyle & TextStyle & ImageStyle>>;

  export default styles;
}
