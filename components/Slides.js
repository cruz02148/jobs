import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
}

class Slides extends Component {
  renderLastSlide = (index) => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
          />
      );
    }  
  }

  renderSlides = () => {
    return this.props.data.map((slide, i) => {
      return (
        <View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.color }]}>
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(i)}
        </View>
      );
    })    
  }

  render() {
    return (
      <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView> 
    );
  }
}

export default Slides;
