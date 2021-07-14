import React from "react";
import { useForm } from "react-hook-form";



const FormInput = () => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const addFriend = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeFriend = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFriends = () => {
    setIndexes([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {indexes.map(index => {
        const fieldName = `friends[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              Career {index}:
              <input
                type="text"
                {...register(`${fieldName}.firstName`)}
              />
            </label>
            <button type="button" onClick={removeFriend(index)}>
              Remove
            </button>
          </fieldset>
        );
      })}

      <button type="button" onClick={addFriend}>
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