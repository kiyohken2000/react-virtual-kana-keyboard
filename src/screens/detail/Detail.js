import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from '../../components/ScreenTemplate'
import Button from '../../components/Button'
import { useNavigate } from "react-router-dom";
import { colors, fontSize } from "../../theme";
import { config } from "../../config";

export default function Detail() {
  const navigate = useNavigate()

  const onGoBack = () => {
    navigate(-1)
  }
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text style={styles.label}>Detail</Text>
        <Text style={styles.title}>{config.siteTitle}</Text>
        <View style={{width: '50%'}}>
          <Button
            label='Go Back'
            onPress={onGoBack}
            color={colors.deeppink}
            desable={false}
            labelColor={colors.white}
          />
        </View>
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  label: {
    fontSize: fontSize.xxLarge,
    fontWeight: '500'
  },
  title: {
    fontSize: fontSize.large,
  }
})