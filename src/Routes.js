import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

const Rotas = () => (
  <Router scene>
    <Scene>
      <Scene key='formCadastro' component={FormCadastro} title='Cadastro'></Scene>
      <Scene key='formLogin' component={FormLogin} title='Login' initial></Scene>
    </Scene>
  </Router>
);

export default Rotas;