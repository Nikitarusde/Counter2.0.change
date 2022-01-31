import React from 'react';


type ButtonType = {
    name: string
    callBack?: () => void
    disable?: boolean
    // ref?: string
}

export const Button = ({name,disable, callBack, ...props}: ButtonType) => {



    return (
        <button onClick={callBack}  disabled={disable} className={disable ? "disable" : "button"}
                // ref={props.ref}
        >{name}</button>
    );
};

