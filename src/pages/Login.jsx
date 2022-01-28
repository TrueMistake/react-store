import React, {useState} from 'react';
import BlockBanner from "../components/BlockBanner";
import {Link} from "react-router-dom";
import MyInput from "../components/UI/MyInput";
import {useDispatch, useSelector} from "react-redux";
import {authPost} from "../redux/actions/auth";
import Loader from "../components/Loader";

const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const [isValidForm, setIsValidForm] = useState({ isFormValid: false})
    const [formControl, setFormControl] = useState({
        username: {
            value: '',
            type: 'text',
            label: 'Username',
            errorMessage: 'Введите корректный Username',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 3
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Password',
            errorMessage: 'Введите корректный Пароль или длина пароля не менее 6 символов',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }
        }
    });
    const [checked, setChecked] = useState(false);
    const formCheck = (event) => {
        setChecked(event)
    }


    const validateControl = (value, validation) => {
        if (!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid;
    }


    const onChangeHandler = (event, controlName) => {
        const formControls = {...formControl};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControl).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        })

        setFormControl(formControls)
        setIsValidForm({isFormValid: isFormValid})
    }

    const submitForm = e => {
        e.preventDefault();
        if (checked && isValidForm) {
            dispatch(authPost(formControl));
        }
    }


    return (
        <main className="main">
            <BlockBanner title="Login / Register" text="Login/Register"/>
            <section className="login_box_area section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <div className="hover">
                                    <h4>New to our website?</h4>
                                    <p>There are advances being made in science and technology everyday, and a good
                                        example of this is the</p>
                                    <Link className="button button-account" to="/register">Create an Account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Log in to enter</h3>
                                {auth.isLoading
                                    ? <Loader/>
                                    : <form className="row login_form" action="" id="contactForm">
                                        {Object.keys(formControl).map((controlName, index) =>
                                            <div className="col-md-12 form-group" key={controlName + index}>
                                                <MyInput
                                                    type={formControl[controlName].type}
                                                    className="form-control"
                                                    placeholder={formControl[controlName].label}
                                                    touched={formControl[controlName].touched}
                                                    valid={formControl[controlName].valid}
                                                    value={formControl[controlName].value}
                                                    shouldValidate={!!formControl[controlName].validation}
                                                    errorMessage={formControl[controlName].errorMessage}
                                                    onChange={event => onChangeHandler(event, controlName)}
                                                />
                                                {formControl[controlName].valid}
                                            </div>
                                        )}
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account">
                                                <input type="checkbox"
                                                       id="f-option2"
                                                       name="selector"
                                                       onChange={e => formCheck(e.target.checked)}
                                                />
                                                <label htmlFor="f-option2">Keep me logged in</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <button type="submit"
                                                    value="submit"
                                                    className="button button-login w-100"
                                                    onClick={e => submitForm(e)}
                                            >Log In
                                            </button>
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;