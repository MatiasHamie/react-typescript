// useState
import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
// useEffect - useRef
import { TimerPadre } from "./components/TimerPadre";
// useReducer
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr className="w-50" />
      <h2>useState</h2>
      <Counter />
      <Usuario />
      <hr className="mx-auto" />

      <h2>useEffect - useRef</h2>
      <TimerPadre />
      <hr className="mx-auto" />

      <h2>useReducer</h2>
      <ContadorRed />
      <hr className="mx-auto" />

      <h2>Custom Hooks</h2>
      <Formulario />
    </>
  );
}

export default App;
