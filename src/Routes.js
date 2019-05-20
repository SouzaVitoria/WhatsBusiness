import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContatos from './components/AdicionarContato';
import Conversa from './components/Conversa';

const Routes = () => (
  <Router
    sceneStyle={{ backgroundColor: '#115E54' }}
    titleStyle={{ color: '#000' }}
  >
    <Stack key="root" navigationBarStyle={{ backgroundColor: '#115E54', color:"#FFF" }}>
      <Scene key='formLogin' component={FormLogin} title='Login' hideNavBar initial />
      <Scene key='formCadastro' component={FormCadastro} title='Cadastro' hideNavBar />
      <Scene key='formBoasVindas' component={BoasVindas} title='Welcome' hideNavBar />
      <Scene key='formPrincipal' component={Principal} title='Main' hideNavBar />
      <Scene key='formAdicionarContato' component={AdicionarContatos} title='Adicionar Contatos' />
      <Scene key='formConversa' component={Conversa} title='Conversa' />
    </Stack>
  </Router>
);

export default Routes;