import React from 'react';
import Carousel from "pinar";
import { StyleSheet, SafeAreaView, Text, ScrollView, Image, View, Dimensions} from 'react-native';

const widthscreen = (Dimensions.get('window').width);
const images = [
    'https://images.pexels.com/photos/6624333/pexels-photo-6624333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/4577194/pexels-photo-4577194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const Principal = () => {
    return (

    <SafeAreaView
    style={{justifyContent: 'center',  alignItems: 'center', marginTop: 10}}>
    <Text style={styles.title}> Bienvenidos a la APP</Text>
    <View>

        <Carousel>
        <View style={styles.slide1}>
        <Image
        style={styles.image}
        source={{
          uri: 'https://images.pexels.com/photos/6624333/pexels-photo-6624333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }}
        />
        <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.slide2}>
        <Image
        style={styles.image}
        source={{
          uri: 'https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }}
        />
        <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.slide3}>
        <Image
        style={styles.image}
        source={{
          uri: 'https://images.pexels.com/photos/4577194/pexels-photo-4577194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }}
        />
        <Text style={styles.text}>3</Text>
        </View>
        </Carousel>

    </View>
        
    </SafeAreaView> 
    );
    }

    const styles = {
        title: {
            fontSize:25,
            marginBottom: 5,
            marginTop: 30
         },
         image: {
            width: widthscreen,
            height: 650,
          },
        slide1: {
            justifyContent: "center",
            alignItems: "center",
        },
        slide2: {
          justifyContent: "center",
          alignItems: "center",
        },
        slide3: {
          justifyContent: "center",
          alignItems: "center",
        },
        text: {
          color: "#1f2d3d",
          opacity: 0.7,
          fontSize: 48,
          fontWeight: "bold"
        }
      };
export default Principal;