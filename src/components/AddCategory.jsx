import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    // Al darle enter al form...
    const onSubmit = (e) => {
        e.preventDefault();

        const newInputValue = inputValue.trim();

        // Validación input no vacío
        if (newInputValue === '') return;

        // Añade nuevo valor al arreglo principal
        // onAddCategory((c) => [...c, newInputValue]);

        onNewCategory( newInputValue );

        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search Gif"
                className="input-gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
