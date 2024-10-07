import { useState} from "react";

export const Button = props => {

    const { text } = props;
    const[count, setCount] = useState(0);

    function hadlerButton(){
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        alert(`Número aleatorio: ${randomNumber}`);
        setCount(count + 5);
        
    }
return (
    <button onClick={ hadlerButton }>
        {text} { count }
    </button>
 );
};

export default Button;