import React, { useState } from 'react';
import {
  useHistory
} from 'react-router-dom';

interface IMailForm {
    sendTo: string;
    title: string;
    descript: string;
}
const num: number = 10;

export const MailForm: React.FC = () => {

  const history = useHistory();
  const [mailForm, setMailForm] = useState<IMailForm>({
    sendTo:  '-',
    title: '-',
    descript: '-'
  });
    

  const handleInputChg = (event: React.ChangeEvent<HTMLInputElement>) => {

    setMailForm({...mailForm, [event.target.name]: event.target.value});
  }
  const handleTextAreaChg = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

    setMailForm({...mailForm, [event.target.name]: event.target.value});
  }
  const clickEvent = ()=> {
    console.log(mailForm.title + ', ' + mailForm.descript);
        
    setMailForm({sendTo: '',title: '', descript: ''});
  }
  return (
    <div className="App">
      title:
      <input
        type="text"
        name="title"
        value={mailForm.title}
        onChange={handleInputChg}
      />
      <br></br>
      description
      <br></br>
      <textarea cols={25} rows={4}
        name="descript"
        value={mailForm.descript}
        onChange={handleTextAreaChg}>
        </textarea>
      <button onClick={clickEvent}>btn</button>
    </div>
  );
}