
import { Form } from './components/Form/form';
import ListaNova from './components/Array/array';
import './main.css';

function App() {

  const tecs: string[] = ["React", "TypeScript", "Python", "SASS" ]

  return (
    <>
    <ListaNova 
    itens = {tecs}
    />
    <ListaNova 
    itens = {[]}
    />
    </>
  );
}

export default App;
