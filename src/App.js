import './App.css';
import ClassCompDemo from './ClassCompDemo';
import FuncCompDemo from './FuncCompDemo';
import JSXElement from './JSXElement';
import JSXExpression from './JSXExpression';

function App() {
  return (
    <header>
      <JSXElement></JSXElement>
      <hr />
      <JSXExpression />
      <div>
        <FuncCompDemo />
        <FuncCompDemo name="Đinh Ngọc Thái" userName="Devmaster" company="UTT" />
      </div>
      <div>
        <ClassCompDemo />
        <ClassCompDemo company="Devmaster" user="Đinh Ngọc Thái" />
      </div>
    </header>   
  );
}

export default App;
