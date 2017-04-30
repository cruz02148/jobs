import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';

import Slides from '../components/Slides';

const SLIDES_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a Job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
];

class WelcomeScreen extends Component {
  state = { token: null }
  
  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    
    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides data={SLIDES_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;