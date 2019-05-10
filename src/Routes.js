import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

const Routes = () => (
  <Router
    navigatorBarStyle={{ backgroundColor: '#115E54' }}
    titleStyle={{ color: '#FFF' }}
  >
    <Scene>
      <Scene key='formCadastro' component={FormCadastro} title='Cadastro' />
      <Scene key='formLogin' component={FormLogin} title='Login' initial />
      <Scene key='formBoasVindas' component={BoasVindas} title='Welcome' />
      <Scene key='formPrincipal' component={Principal} title='Main' />
    </Scene>
  </Router>
);

export default Routes;