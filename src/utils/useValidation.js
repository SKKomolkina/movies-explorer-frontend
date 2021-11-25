import React from "react";

export const useValidation = (setError, currentUser) => {
    const [values, setValues] = React.useState(currentUser &&
        {name: currentUser.name, email: currentUser.email}
    );

    const [isValid, setIsValid] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});

        setIsValid(target.closest('form').checkValidity());
    }


    React.useEffect(() => {
        if (currentUser && values.name === currentUser.name && values.email === currentUser.email) {
            setIsValid(false);
        }
    }, [values, currentUser, setIsValid]);

    return {
        values,
        setValues,
        isValid,
        setIsValid,
        handleChange,
        errors,
        setErrors
    };
};
