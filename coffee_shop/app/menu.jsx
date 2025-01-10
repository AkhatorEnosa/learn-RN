 import { Appearance, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

 import { Colors } from "@/constants/Colors";
 import { MENU_ITEMS } from "@/constants/MenuItems"
 import  MENU_IMAGES  from "@/constants/MenuImages"

export default function Menuscreen() {
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark  : Colors.light;

    const styles = createStyles(theme, colorScheme)
    
    const Container =  Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const seperatorComp = <View style={styles.seperator}/>

    const footerComp = <Text style={styles.footer}>End of Menu</Text>

    return (
        <Container>
        
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={seperatorComp}
                ListFooterComponent={footerComp}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemText, styles.menuItemTitle]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image
                            source={MENU_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        ></Image>
                    </View>
                )}
            ></FlatList>

        </Container>
    )
}

function createStyles( theme, colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        seperator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? "papayawhip" : "#000",
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10 
        },
        footer: {
            width: '100%',
            color: theme.text,
            fontSize: 10,
            textAlign: "center"
        },
        row: {
            flexDirection: "row",
            width: "100%",
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : 'black',
            borderWidth: 1,
            borderRadius: 10,
            overflow: "hidden",
            marginHorizontal: 'auto',
            alignItems: "center"
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
            fontWeight: 'bold'
        },
        menuItemText: {
            color: theme.text
        },
        menuImage: {
            width: 100,
            height: 100
        }
    })
}