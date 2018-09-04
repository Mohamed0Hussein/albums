import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetail';

const App = () =>
 (
   <View style = {{flex : 1}}>
  <Header headerText = {'Albums!'}/>
  <AlbumList/>
  </View>
);
export default App;
AppRegistry.registerComponent('albums',()=> App);