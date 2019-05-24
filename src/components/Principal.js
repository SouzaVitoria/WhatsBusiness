import React, { Component } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

export default class Principal extends Component {
 state = {
  index: 0,
  routes: [
   { key: 'contatosPrincipal', title: 'Contatos' },
   { key: 'conversasPrincipal', title: 'Conversas' },
  ],
 };

 _handleChangeTab = index => this.setState({ index });
 _renderHeader = props => <TabBarMenu {...props} style={{ flex: 1 }} />;
 _renderScene = SceneMap({
  contatosPrincipal: Contatos,
  conversasPrincipal: Conversas
 })

 render() {
  return (
   <TabView
    navigationState={this.state}
    renderScene={this._renderScene}
    renderTabBar={this._renderHeader}
    onRequestChangeTab={this._handleChangeTab}
    onIndexChange={this._handleChangeTab}
   />
  );
 }
}