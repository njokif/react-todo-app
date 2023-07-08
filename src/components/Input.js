import React, { useState } from "react";

function Input(props) {

    const [name, setName] = useState("")
    function handleChange(event) {
        setName(event.target.value);
    };
    function handleClick(event) {
          props.onAdd(name)  
              setName("");
        event.preventDefault();
    };
    return <div>
        <form>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="add a task" />
            <button onClick={handleClick} type="submit">Add</button>
        </form>
    </div>
};
export default Input;