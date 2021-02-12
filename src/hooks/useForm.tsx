import { ChangeEvent, useState } from "react";

/**
 * Se puede usar la sintaxis de una funcion comun como
 * export function useForm<T>(initState: T){}
 *
 * Pero en una arrowFunction se tiene que hacer entender a Ts
 * que T es un objeto.
 */

export const useForm = <T extends Object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState);

  /**
   * ChangeEvent porque estamos manejando el onChange={}
   * Del input
   *
   * A su vez, ChangeEvent es generico, necesitas aclararle
   * de que tipo de control proviene, un radio, check, input, etc.
   *
   * ¿Qué esta cambiando? un HTMLInputElement, puede ser un HTMLSelectInput y asi...
   */
  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormulario({ ...formulario, [name]: value });
  };

  return { formulario, handleOnChange };
};
