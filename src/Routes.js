import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContatos from './components/AdicionarContato';

const Routes = () => (
  <Router
    sceneStyle={{ backgroundColor: '#115E54' }}
    titleStyle={{ color: '#000' }}
  >
    <Scene>
      <Scene key='formCadastro' component={FormCadastro} title='Cadastro' hideNavBar={false} />
      <Scene key='formLogin' component={FormLogin} title='Login' hideNavBar={true} initial />
      <Scene key='formBoasVindas' component={BoasVindas} title='Welcome' hideNavBar={true} />
      <Scene key='formPrincipal' component={Principal} title='Main' hideNavBar={true}  />
      <Scene key='formAdicionarContato' component={AdicionarContatos} title='Adicionar Contatos' hideNavBar={false}  />
    </Scene>
  </Router>
);

export default Routes;