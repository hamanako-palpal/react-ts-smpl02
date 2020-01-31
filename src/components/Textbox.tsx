import React, { useState } from 'react';
import {
  useHistory
} from 'react-router-dom';

export const Textbox: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [temp, setTemp] = useState<string[]>([]);
    const history = useHistory();

    const handleChg = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    }
    const clickEvent = ()=> {
      setTemp([...temp, name]);
      setName("");
    }
    return (
      <div className="App">
        <button onClick={()=>history.push('/about')}>yyyy</button>
        <input type="text" value={name} onChange={handleChg}/>
        <button onClick={clickEvent}>btn</button>
        {temp.map((item: string) => <p>{item}</p>)}
      </div>
    );
  }