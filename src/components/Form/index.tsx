import { useForm } from "react-hook-form";
import Goblet from "../../assets/calice.png";
import "./styles.css";
import callContextStates from "../../hooks/callContextStates";

interface IForm {
  name: string
}

function Form() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IForm>();

  const { names, setNames } = callContextStates();

  function handleAddName(data: IForm) {
    const arrayNames = [...names];
    arrayNames.push(data.name);
    setNames(arrayNames);
    reset();
  }

  return (
    <div className="form-container">
      <div className="title">
        <img src={Goblet} alt="glass" />
        <h1>Sorteador Potter</h1>
        <img src={Goblet} alt="glass" />
      </div>
      <form onSubmit={handleSubmit(handleAddName)}>
        <input
          {...register("name", { required: "Campo não preenchido" })}
          type="text"
          placeholder="Escreva seu nome..."
          autoComplete="off"
        />
        <button>Ok</button>
      </form>
      {errors.name && <span>Campo não preenchido</span>}
    </div>
  )
}

export default Form;