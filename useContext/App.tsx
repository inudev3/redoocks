import { Screen } from './Screen';
import Lang from './context';
import translations from './translations';




function App() {

  return (
    <Lang defaultLang='en'>
      <Screen />
      </Lang>
  );
}

export default App;
