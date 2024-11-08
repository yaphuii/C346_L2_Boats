import React from 'react';
import { StatusBar, ScrollView, Text, StyleSheet, View } from 'react-native';
import Boat from './components/Boat.js';

const App = () => {
    return (
        <ScrollView>
            <StatusBar hidden={true} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>GetABoat - For Sale</Text>
            </View>

            <Boat title="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                  icon_name="ship" poster={require('./img/sea_ray.jpg')} />
            <Boat title="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others."
                  icon_name="ship" poster={require('./img/four_winns.jpg')} />
            <Boat title="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                  icon_name="ship" poster={require('./img/flipper.jpg')} />
            <Boat title="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                  icon_name="ship" poster={require('./img/princess.jpg')} />
            <Boat title="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                  icon_name="ship" poster={require('./img/bayliner.jpg')} />
            <Boat title="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                  icon_name="ship" poster={require('./img/fairline.jpg')} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: 'green',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: "red", // Use a color that matches your theme
        paddingBottom: 10,
    },
});

export default App;
