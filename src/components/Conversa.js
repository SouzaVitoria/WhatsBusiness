import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { modificaMensagem, enviarMensagem } from '../actions/AppActions'

class Conversa extends Component {
    _enviaMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;
        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
    }

    render() {
        return (
            <View style={styles.viewPrincipal}>
                <View style={{ flex: 1, marginBottom: 20 }}>
                    <Text>oi</Text>
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
    return ({
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem })(Conversa);