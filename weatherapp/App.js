import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
        <Text style={styles.title}>
              Weather Forecast
        </Text>
        <Image
          style={styles.cloudImage}
          source={require('./clouds.png')}
        />
  <Text style ={{fontSize: 20}}>Weather : {this.state.weather.weather[0].description}</Text>
  <Text style ={{fontSize: 20}}>Wind Speed : {this.state.weather.wind.speed}</Text>
  <Text style ={{fontSize: 20}}>Temprature : {this.state.weather.main.temp}</Text>
  <Text style ={{fontSize: 20}}>Min Temprature : {this.state.weather.main.temp_min}</Text>
  <Text style ={{fontSize: 20}}>Max Temprature : {this.state.weather.main.temp_max}</Text>
  <Text style ={{fontSize: 20}}>Pressure : {this.state.weather.main.pressure}</Text>
  <Text style ={{fontSize: 20}}>Humidity : {this.state.weather.main.humidity}</Text>
   
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1, 
    alignItems: 'center',
  },
    title:{ 
      marginTop: 20,
      fontSize: 40,
      fontWeight: '550' 
    },
    cloudImage :{ 
      width: 200, 
      height: 200, 
      marginTop: 30 
    },
    textContainer : { 
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:150
    }
});
