import React from "react";
import {useLocation} from "react-router-dom";

export const useValidation = (setError, currentUser) => {
    const [values, setValues] = React.useState(currentUser ?
        {name: currentUser.name, email: currentUser.email} :
        {name: '', email: '', password: ''}
    );

    const [isValid, setIsValid] = React.useState(false);
    const [validation, setValidation] = React.useState({});
    const [errors, setErrors] = React.useState({});

    const location = useLocation().pathname;

    function handleChange(evt) {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        setValues({...values, [name]: value});
        setValidation({...errors, [name]: target.validationMessage});

        setIsValid(target.closest('form').checkValidity());
    }

    const onClearValues = React.useCallback(
        (
            clearValues = {name: '', email: ''},
            clearErrors = {},
            clearIsValid = false
        ) => {
            if (!location === '/profile') {
                setValues(clearValues);
                setValidation(clearErrors);
                setIsValid(clearIsValid);
            }
        }, [setValues, setIsValid, setValidation, location]);

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
        setErrors,
        validation,
        setValidation,
        onClearValues
    };
};
