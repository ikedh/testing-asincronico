import React from 'react'

const Toggle = ({onBtnClick = () => {}}) => {

const onClick = e =>{
    setTimeout(() => {
        onBtnClick(e)
        console.log("boto apretado");
    }, 3000);
}

  return (

    <div>
        <button onClick={onClick}>Click Aquí</button>
    </div>

  )
}

export default Toggle