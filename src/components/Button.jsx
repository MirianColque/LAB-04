import { useState} from "react";

const Button = props => {

    const { text } = props;
    const[count, setCount] = useState(0);

    function hadlerButton(){
        setCount(count + 0);
    }
return (
    <button onClick={ hadlerButton }>
        {text} { count }
    </button>
);
}

export default Button;