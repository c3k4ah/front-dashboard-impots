import React, { useState, useContext, useReducer, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import styles from "../styles/AddNewBook/AddNewBook.module.css";
import { GiCancel } from "react-icons/gi";
import Button from "./UI/Button";
import UserFormField from "./UI/BookFormField";
import SelectCategory from "./UI/SelectCategory";

const AddBook = () => {
    const { addBook } = useContext(GlobalContext);
    const history = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);

    
    const [userName, dispatchUserName] = useReducer(
        (state, action) => {
            if(action.type === "BOOK_INPUT"){
                return {value: action.val, isValid: action.val!== ''}
            }
            
            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

  
    const [userLastName, dispatchUserLastName] = useReducer(
        (state, action) => {
            if(action.type === "BOOK_INPUT"){
                return {value: action.val, isValid: action.val!== ''}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

   
    const [userDateNaissance, dispatchDateNaissance] = useReducer(
        (state, action) => {
            if(action.type === "BOOK_INPUT"){
                return {value: action.val, isValid: action.val!== ''}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

   
    const [lieuNaissance, dispatchLieuNaissance] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )
    const [cin, dispatchCin] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )
    const [dateCin, dispatchDateCin] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )
    const [adresse, dispatchAdress] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )
    const [tel, dispatchTel] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )
    const [password, dispatchPassword] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )
    const [fonction, dispatchFonction] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )
    const [lieuCin, dispatchLieuCin] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )
//-----------------------------------------------------------------------------
    const { isValid: userNameIsValid} = userName;
    const { isValid: userLastNameIsValid} = userLastName;
    const { isValid: userDateNaissanceIsValid} = userDateNaissance;
    const { isValid: lieuNaissanceIsValid} = lieuNaissance;
    const { isValid: cinIsValid} =cin ;
    const { isValid: dateCinIsValid} = dateCin;
    const { isValid: adresseIsValid} = adresse;
    const { isValid: telIsValid} = tel;
    const { isValid: passwordIsValid} = password;
    const { isValid: fonctionIsValid} = fonction;
    const { isValid: lieuCinIsValid} = lieuCin;

    //useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormValid(
                userNameIsValid &&
                userLastNameIsValid &&
                userDateNaissanceIsValid &&
                lieuNaissanceIsValid && 
                cinIsValid &&
                dateCinIsValid &&
                adresseIsValid &&
                telIsValid &&
                passwordIsValid &&
                fonctionIsValid &&
                lieuCinIsValid !== false
            );
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [
        userNameIsValid ,
        userLastNameIsValid ,
        userDateNaissanceIsValid ,
        lieuNaissanceIsValid , 
        cinIsValid,
        dateCinIsValid,
        adresseIsValid,
    
        telIsValid,
        passwordIsValid,
        fonctionIsValid,
        lieuCinIsValid
    ]
    );


    const onSubmit = function (e) {
        e.preventDefault()
        if(isFormValid !== true) return

        const newBook = {
            nom: userName.value,
            prenoms:userLastName.value,
            date_naissance: userDateNaissance.value,
            lieu_naissance: lieuNaissance.value,
            cin: cin.value,
            date_cin: dateCin.value,
            adresse: adresse.value,
            tel1: tel.value,
            password: password.value,
            fonction: fonction.value,
            lieu_cin: lieuCin.value,
        };

        Axios.post("http://localhost:3005/personnes/create", {
            nom: userName.value,
            prenoms:userLastName.value,
            date_naissance: userDateNaissance.value,
            lieu_naissance: lieuNaissance.value,
            cin: cin.value,
            date_cin: dateCin.value,
            adresse: adresse.value,
            tel1: tel.value,
            password: password.value,
            fonction: fonction.value,
            lieu_cin: lieuCin.value,
        });
        addBook(newBook);
        console.log(newBook);
        history.push("/");
    };

    const onNameChange = function (e) {
        dispatchUserName({type: "BOOK_INPUT", val: e.target.value} )
    };

    const onLastNameChange = function (e) {
        dispatchUserLastName({type: 'BOOK_INPUT', val: e.target.value});
    };

    const onDateNaissanceChange = function (e) {
        dispatchDateNaissance({type: "BOOK_INPUT", val: e.target.value})
        
    };
    const onLieuNaissanceChange = function (e) {
        dispatchLieuNaissance({type: "BOOK_INPUT", val: e.target.value});
    };
    const onCinChange = function (e) {
        dispatchCin({type: "BOOK_INPUT", val: e.target.value});
    };
    const onLieuCinChange = function (e) {
        dispatchLieuCin({type: "BOOK_INPUT", val: e.target.value});
    };
    const onDateCinChange = function (e) {
        dispatchDateCin({type: "BOOK_INPUT", val: e.target.value});
    };
    const onAdressChange = function (e) {
        dispatchAdress({type: "BOOK_INPUT", val: e.target.value});
    };
    const onTelChange = function (e) {
        dispatchTel({type: "BOOK_INPUT", val: e.target.value});
    };
    const onPasswordChange = function (e) {
        dispatchPassword({type: "BOOK_INPUT", val: e.target.value});
    };
    const onFonctionChange = function (e) {
        dispatchFonction({type: "BOOK_INPUT", val: e.target.value});
    };

    return (
        <form onSubmit={onSubmit} className={`${styles.form}`}>
            <UserFormField
                label="user name"
                value={userName.value}
                type="text"
                placeholder="enter user name"
                onChange={onNameChange}
                className={`${userName.isValid === false ? styles.invalid : ''}`}
            />

            <UserFormField
                label="userLastName"
                value={userLastName.value}
                type="text"
                placeholder="enter userLastName"
                onChange={onLastNameChange}
                className={`${userLastName.isValid === false ? styles.invalid : ''}`}
            />

            <UserFormField
                label="dateNaissance"
                value={userDateNaissance.value}
                type="date"
                placeholder="enter dateNaissance"
                onChange={onDateNaissanceChange}
                className={`${userDateNaissance.isValid === false ? styles.invalid : ''}`}
            />
            <UserFormField
                label=""
                value={lieuNaissance.value}
                type="text"
                placeholder="enter lieuNaissance"
                onChange={onLieuNaissanceChange}
                className={`${lieuNaissance.isValid === false ? styles.invalid : ''}`}
            />
            <UserFormField
                label="cin"
                value={cin.value}
                type="text"
                placeholder="enter cin"
                onChange={onCinChange}
                className={`${cin.isValid === false ? styles.invalid : ''}`}
            />
              <UserFormField
                label="dateCin"
                value={dateCin.value}
                type="date"
                placeholder="enter dateCin"
                onChange={onDateCinChange}
                className={`${dateCin.isValid === false ? styles.invalid : ''}`}
            />  
            <UserFormField
                label="adresse"
                value={adresse.value}
                type="text"
                placeholder="enter "
                onChange={onAdressChange}
                className={`${adresse.isValid === false ? styles.invalid : ''}`}
            />
            <UserFormField
                label="tel"
                value={tel.value}
                type="text"
                placeholder="enter "
                onChange={onTelChange}
                className={`${tel.isValid === false ? styles.invalid : ''}`}
            />
            <UserFormField
                label="password"
                value={password.value}
                type="password"
                placeholder="enter password"
                onChange={onPasswordChange}
                className={`${password.isValid === false ? styles.invalid : ''}`}
            />
           
            <UserFormField
                label="lieuCin"
                value={lieuCin.value}
                type="text"
                placeholder="enter lieuCin"
                onChange={onLieuCinChange}
                className={`${lieuCin.isValid === false ? styles.invalid : ''}`}
        />


         <SelectCategory onChange={onFonctionChange}/>

            <div className={styles.buttons}>
                <Button type="submit" className={`${isFormValid ? styles.submit : styles.disabled}`} onClick={() => onSubmit()}>
                    Submit
                </Button>
                <Link to="/" className={styles.link}>
                    <GiCancel /> Cancel
                </Link>
            </div>
        </form>
    );
};

export default AddBook;
