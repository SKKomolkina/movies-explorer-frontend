import React, {useCallback} from "react";
import {useLocation} from "react-router-dom";

export const useValidation = (setError, currentUser) => {
    const [isValid, setIsValid] = React.useState(false);
    const [validatorErrors, setValidatorErrors] = React.useState({});

    const [values, setValues] = React.useState(currentUser ?
        {name: currentUser.name, email: currentUser.email} :
        {name: '', email: '', password: ''}
    );

    const location = useLocation().pathname;

    const handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        setValues({...values, [name]: value});
        setValidatorErrors({...validatorErrors, [name]: target.validationMessage});

        setIsValid(target.closest('form').checkValidity());
    }

    React.useEffect(() => {
        if (
            currentUser &&
            values.name === currentUser.name &&
            values.email === currentUser.email
        ) {
            setIsValid(false);
        }
    }, [values, currentUser, setIsValid]);

    const clearForm = useCallback(
        (
            clearValues = {name: '', email: '', password: ''},
            clearErrors = {},
            clearIsValid = false
        ) => {
            if (!location === '/profile') {
                setValues(clearValues);
                setValidatorErrors(clearErrors);
                setIsValid(clearIsValid);
            }
        },
        [setValues, setValidatorErrors, setIsValid, setError, location]
    );

    return {
        values,
        setValues,
        isValid,
        setIsValid,
        handleChange,
        validatorErrors,
        setValidatorErrors,
        clearForm,
    };
};
