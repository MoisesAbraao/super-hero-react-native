import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import CardView from 'react-native-rn-cardview';

function Main() {
    const superHero = [
        {
            name: 'Spider Man',
            avatar: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19184-cartaz.jpg'
        },
        {
            name: 'America Captain',
            avatar: 'https://amazonasatual.com.br/wp-content/uploads/2018/03/capit%C3%A3o-am%C3%A9rica.jpg'
        },
        {
            name: 'Hulk',
            avatar: 'https://images.tcdn.com.br/img/img_prod/723087/quadro_metal_hulk_avengers_5891_1_20191108184714.jpg'
        },
        {
            name: 'Thor',
            avatar: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2019/11/legiao_7Rn5yMXUptNzr1oQGw9b_gkeuvmaAH063FjiKIEcDC.png.jpeg'
        }
    ];

  return (
    <CardView cardElevation={4}
            maxCardElevation={4}
            radius={10}
            backgroundColor={'#ffffff'}>
        <ScrollView>
            {
                superHero.map((hero) => (
                    <View style={{padding:10}}>
                        <View>
                            <Image
                                style={{height: 550}}
                                source={{uri:hero.avatar}}
                            />
                        </View>
                        <View>
                            <Text style={styles.textFont}>{hero.name}</Text>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    </CardView> 
  );
};

const styles = StyleSheet.create({
    textFont: {
      fontWeight: 'bold',
      fontSize: 40,
    }
  });

export default Main;