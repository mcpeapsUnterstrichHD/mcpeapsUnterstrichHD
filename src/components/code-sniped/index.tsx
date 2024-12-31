import { Colors } from "@/constants/Colors";
import { ThemedText, ThemedTextProps } from "../ThemedText"
import { StyleSheet } from 'react-native';

export type ThemedCodeSnipetProps = ThemedTextProps & {
}

export default function ThemedCodeSnipet({children}: ThemedCodeSnipetProps) {
    return (
        <ThemedText type='code' style={styles.sniped} >
            {children}
        </ThemedText>
    )
}

const styles = StyleSheet.create({
    sniped: {
        backgroundColor: Colors.gray,
        color: Colors.styles.foreground,
        padding: 5,
        borderRadius: 10,
        margin: 5,
        zIndex: -1,
        lineHeight: 18,
        textDecorationLine: 'none',
        fontFamily: 'Mono-Regular',
        fontSize: 16,
    }
});