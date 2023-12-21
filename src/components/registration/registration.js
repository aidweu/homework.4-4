import React, {useState} from 'react';
import "./registration.css"

const Registration = () => {

    const [inputName, setInputName] = useState('')
    const [inputSurname, setInputSurname] = useState('')
    const [inputCountry, setInputCountry] = useState('')
    const [inputNumber, setInputNumber] = useState('')
    return (
        <div className="reg">
            <div className="title">
                <span>REGISTRATION </span>
            </div>
            <form action="">
                <input
                    value={inputName}
                    onChange={({target}) => setInputName(target.value)}
                    type="text"
                    className="input_name"
                    placeholder="USERNAME"
                />
                <input
                    value={inputSurname}
                    type="text"
                    className="input_surname"
                    onChange={({target}) => setInputSurname(target.value)}
                    placeholder="LASTNAME"/>
                <input
                    value={inputCountry}
                    type="text"
                    className="input_country"
                    onChange={({target}) => setInputCountry(target.value)}
                    placeholder="COUNTRY"/>
                <input
                    value={inputNumber}
                    type="text"
                    className="input_number"
                    onChange={({target}) => setInputNumber(target.value)}
                    placeholder="PHONE NUMBER"/>

                <button className="button" type="Submit">SELECT</button>
            </form>
            <div className='real_t'>
                <span>USER NAME:: {inputName}</span>
                <span>LAST NAME: {inputSurname}</span>
                <span>COUNTRY: {inputCountry}</span>
                <span>PHONE: {inputNumber}</span>
            </div>
        </div>
    );
};

export default Registration;