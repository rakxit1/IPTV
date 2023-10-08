import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
import styles from '../styles';

interface HeaderNavToTabInterface {
  headingText: string;
  onPressComp: () => void;
}

const HeaderNavToTab: FC<HeaderNavToTabInterface> = ({
  headingText,
  onPressComp,
}) => {
  return (
    <TouchableOpacity onPress={onPressComp} style={styles.category}>
      <Text style={styles.categoryText}>{headingText}</Text>
      <Icon name="chevron-right" color="white" size={30} />
    </TouchableOpacity>
  );
};

export default HeaderNavToTab;
