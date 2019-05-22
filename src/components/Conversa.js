import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { modificaMensagem, enviarMensagem, conversaUsuarioFetch } from '../actions/AppActions';


class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail);
        this.criaFonteDeDados(this.props.conversa);
        console.log("componentWill -> ", this.props.conversaUsuarioFetch(this.props.contatoEmail))
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversa);
        console.log("recente -> ", this.criaFonteDeDados(nextProps.conversa))
    }


    _enviaMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;
        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
    }

    criaFonteDeDados(conversa) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(conversa)
    }

    renderRow(texto) {
        return (
            <View>
                <Text> {texto.mensagem}</Text>
                <Text> {texto.tipo}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.viewPrincipal}>
                <View style={{ flex: 1, marginBottom: 20 }}>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
                <View style={styles.viewInputImage}>
                    <TextInput
                        style={styles.input}
                        placeholder='Write here'
                        placeholderTextColor='#000'
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                    />
                    <TouchableOpacity
                        style={styles.image}
                        onPress={this._enviaMensagem.bind(this)}
                    >
                        <Image source={require('../imgs/enviar_mensagem.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewPrincipal: {
        backgroundColor: '#FFF',
        flex: 1,
        padding: 10,
    },
    viewInputImage: {
        flexDirection: 'row',
        height: 60
    },
    image: {
        marginLeft: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000',
        padding: 3,
        borderRadius: 4,
        color: '#000',
        flex: 4
    }
});

mapStateToProps = state => {
    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    console.log("+ lodash -> ", conversa);
    console.log("- lodash -> ", state.ListaConversaReducer)

    return ({
        mensagem: state.AppReducer.mensagem,
        conversa
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuarioFetch })(Conversa);