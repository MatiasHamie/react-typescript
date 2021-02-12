import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
}

export const Formulario = () => {
  const { formulario, handleOnChange } = useForm<FormData>({
    email: "valor inicial email",
    nombre: "valor inicial nombre",
  });

  const { email, nombre } = formulario;

  return (
    <form>
      <div className="mb-3 w-50">
        <label className="form-label">Email:</label>
        <input
          className="form-input form-control"
          name="email"
          type="email"
          autoComplete="off"
          value={email}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3 w-50">
        <label className="form-label">Nombre:</label>
        <input
          className="form-input form-control"
          name="nombre"
          type="text"
          autoComplete="off"
          value={nombre}
          onChange={handleOnChange}
        />
      </div>

      <pre>{JSON.stringify(formulario, null, 2)}</pre>
    </form>
  );
};
