import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({title, description, icon_name, poster}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name={icon_name} size={20} />
            <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={poster} style={{width: 370, height:300}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    title: {
        fontSize: 24, // Change this to your desired font size
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 5,
    }
});

export default Boat;
