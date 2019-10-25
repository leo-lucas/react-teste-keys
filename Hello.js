import React, {useState} from 'react';

export default () => {
 const [value, setValue] = useState("") 
  return <input onChange={(e)=> setValue(e.target.value)} value={valeu}/>
};
