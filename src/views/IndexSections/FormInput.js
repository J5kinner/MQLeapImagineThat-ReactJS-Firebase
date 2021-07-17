import React from "react";
import { useForm } from "react-hook-form";



const FormInput = () => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const addCareer = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeCareer = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFriends = () => {
    setIndexes([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {indexes.map(index => {
        const fieldName = `rows[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              <input
                type="text"
                {...register(`${fieldName}.firstName`)}
              />
            </label>
            <button type="button" onClick={removeCareer(index)}>
              Remove
            </button>
          </fieldset>
        );
      })}

      <button type="button" onClick={addCareer}>
        Add Career
      </button>
      <button type="button" onClick={clearFriends}>
        Clear Careers
      </button>
      <input type="submit" />
    </form>
  );
}


export default FormInput;