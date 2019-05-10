import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';

const Routes = () => (
  <Router scene>
    <Scene>
      <Scene key='formCadastro' component={FormCadastro} title='Cadastro' />
      <Scene key='formLogin' component={FormLogin} title='Login' initial />
      <Scene key='formBoasVindas' component={BoasVindas} title='Welcome' />
    </Scene>
  </Router>
);

export default Routes;