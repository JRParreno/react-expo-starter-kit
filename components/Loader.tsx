import * as React from 'react';
import { ActivityIndicator, PixelRatio, StyleSheet, View } from 'react-native';
import { commonColor } from '../constants/Colors';


export default function Loader() {
    return (
        <View style={styles.fullScreen}>
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0818A8" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        position: 'relative',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        zIndex: 1
    },
    container: {
        height: PixelRatio.getPixelSizeForLayoutSize(15),
        width: PixelRatio.getPixelSizeForLayoutSize(40),
        borderRadius: 100,
        opacity: 20,
        backgroundColor: commonColor.transparent
    },
});