import React from 'react';

function InputBtn(props) {
  return (
    <>
      <div className='input-btn'>
        <props.icon style={{ fill: props.fill }} height='30px' width='30px' />
        <h4>{props.title}</h4>
      </div>
    </>
  );
}

export default InputBtn;
