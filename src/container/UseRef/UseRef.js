import React, { useRef } from 'react';
import { Input } from 'reactstrap';

function UseRef(props) {

    const NameRef = useRef();
    const EmailRef = useRef();

    const ClickMe = () => {
        console.log(NameRef.current.style.value);
        console.log(EmailRef.current.value);
        NameRef.current.focus();
        EmailRef.current.style.backgroundColor="red";
    }

    return (
        <div>
            <input ref={NameRef} type='text' name='name' placeholder='Enter your name'/>
            <input ref={EmailRef} type='email' name='email' placeholder='Enter your email'/>
            <button onClick={ () => ClickMe()}>ClickMe</button>
        </div>
    );
}

export default UseRef;