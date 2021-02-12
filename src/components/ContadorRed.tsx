import { useReducer } from "react";

type ContadorActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

const initialState = {
  contador: 0,
};

const contadorReducer = (
  state: typeof initialState,
  action: ContadorActionType
) => {
  switch (action.type) {
    case "incrementar":
      return { ...state, contador: state.contador + 1 };
    case "decrementar":
      return { ...state, contador: state.contador - 1 };
    case "custom":
      return { ...state, contador: (state.contador = action.payload) };

    default:
      return { ...state };
  }
};

export const ContadorRed = () => {
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h4>Contador: {contador}</h4>

      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </>
  );
};
