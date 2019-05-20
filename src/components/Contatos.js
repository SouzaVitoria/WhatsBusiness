import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsersFetch } from '../actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Contatos extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.props.contatosUsersFetch();
    this.criaFundoDeDados(this.props.contatos);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFundoDeDados(nextProps.contatos);
  }

  criaFundoDeDados(contatos) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.fonteDeDados = ds.cloneWithRows(contatos)
  }

  renderRow(contato) {
    return (
      <TouchableOpacity
        onPress={(i) => Actions.formConversa(i)}
      >
        <View style={styles.viewPrincipal}>
          <Text style={styles.textNome}> {contato.name} </Text>
          <Text style={styles.textEmail}> {contato.email} </Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <ListView
        style={{ backgroundColor: '#FFF' }}
        enableEmptySections
        dataSource={this.fonteDeDados}
        renderRow={this.renderRow}
      />
    )
  }
}

mapStatesToProps = state => {
  //console.log("state--> ", state.ListaContatosReducer)
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
    return { ...val, uid }
  })
  //console.log(contatos)
  return { contatos: contatos }
}

export default connect(mapStatesToProps, { contatosUsersFetch })(Contatos);

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    borderColor: '#000',
    borderRadius: 5,
    borderBottomWidth: 1,
    marginVertical: 2,
    marginHorizontal: 8
  },
  textNome: {
    fontSize: 20,
    paddingTop: 4,
    paddingBottom: 1,
    paddingHorizontal: 5,
    fontWeight: '500'
  },
  textEmail: {
    fontSize: 16,
    paddingTop: 1,
    paddingBottom: 5,
    paddingHorizontal: 5
  }
});