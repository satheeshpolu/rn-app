import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type ComponentProps = {
  title: string;
  subTitle?: string;
  tileColor?: string;
  iconName?: string; //JSX.Element; => Future enhancement
  iconColor?: string;
  onClick?: () => void;
};

const CustomTile = ({
  title,
  subTitle,
  iconName,
  iconColor = '#818682',
  tileColor = '#dfe0df',
  onClick,
}: ComponentProps) => {
  return (
    <TouchableRipple
      style={styles.container}
      onPress={() => {
        if (onClick) {
          onClick(title);
        }
      }}
      rippleColor={tileColor}>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={styles.title}>{title}</Text>
        {iconName && (
          <Icon
            name={iconName}
            size={24}
            color={iconColor}
            style={styles.icon}
          />
        )}
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </TouchableRipple>
  );
};

export default CustomTile;
