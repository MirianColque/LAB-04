import { useState } from 'react';

const Button = (props) => {
  const { text } = props;
  const [count, setCount] = useState(0);

  function handleButton() {
    setCount(count + 5);
  }

  return (
    <button onClick={handleButton}>
      {text} {count}
    </button>
  );
};

export default Button; 
