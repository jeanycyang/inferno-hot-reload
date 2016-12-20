import Inferno from 'inferno';
import Component from 'inferno-component';
import Layout from './Layout';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Counter />
      </Layout>
    );
  }
}
