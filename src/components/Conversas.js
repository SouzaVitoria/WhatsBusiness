import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/AppActions';

class Conversas extends Component {
componentWillMount(){
 this.props.actions.conversasUsuarioFetch();
}

componentWillReceiveProps(){

}

	render() {
		return (
			<View>

			</View>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversas);

