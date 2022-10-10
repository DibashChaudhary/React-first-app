import React from 'react'

export const Input = ({receiveData}) => {

  const handleOnChange = (e) => {
    const {value} = e.target;
    receiveData(value);
  }
    
  return (
    <div>
        <form action="">
        <input type="text" onChange={handleOnChange} />
    
        </form>
    </div>
  );
};
