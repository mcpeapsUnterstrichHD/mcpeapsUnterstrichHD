import { ThemedText, ThemedTextProps } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";

export type ThemedCodeBoxProps = ThemedTextProps & {
    lang?: 'plain' | 'java' | 'swift' | 'typescript'| 'javascript';
    code?: string;
}

export default function ThemedCodeBox({
    lang = 'plain',
    code,
    children,
    ...rest
}: ThemedCodeBoxProps) {
    const codeContent = code ?? children?.toString() ?? '';

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.langContainer}>
                <ThemedText type="code" style={styles.langText}>
                    {lang}
                </ThemedText>
            </ThemedView>
            <ThemedText
                type='code'
            >
                {codeContent}
            </ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 8,
        backgroundColor: Colors.styles.background,
    },
    langContainer: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: Colors.styles.outline,
        backgroundColor: Colors.styles.background,
    },
    langText: {
        fontSize: 12,
        color: Colors.primary,
    },
    codeContainer: {
        margin: 0,
        padding: 12,
        backgroundColor: Colors.styles.background,
    },
});