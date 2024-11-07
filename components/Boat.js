import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ title, description, icon_name, poster }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name={icon_name} size={24} color="green" />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={poster} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 15,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#444',
        textAlign: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 12,
        marginTop: 15,
        resizeMode: 'cover',
    },
});

export default Boat;
