import { AppContainer } from 'react-hot-loader';
import Inferno from 'inferno';
import App from './App';

const rootEl = document.getElementById('root');
Inferno.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    Inferno.render(
      <AppContainer>
         <App />
      </AppContainer>,
      rootEl,
    );
  });
}
