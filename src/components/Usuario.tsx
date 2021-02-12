import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const initialState: User = { uid: "", name: "" };
  const [user, setUser] = useState<User>(initialState);

  const login = (): void => {
    setUser({
      uid: "ABC123",
      name: "Matias Hamie",
    });
  };

  return (
    <div className="mt-3">
      <h3>Usuario</h3>

      <button className="btn btn-outline-primary my-2" onClick={login}>
        Simulacion Login
      </button>

      {!user.name ? (
        <pre className="mt-2">No hay usuario</pre>
      ) : (
        <pre className="mt-2">{JSON.stringify(user, null, 2)}</pre>
      )}
    </div>
  );
};
