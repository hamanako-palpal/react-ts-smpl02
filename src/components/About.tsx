import React, { useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import '../App.css';
import {MailForm} from './MailForm';
import {SideBar} from './SideBar';

export const About: React.FC = () => {
  const {sendTo} = useParams();
  console.log(sendTo || 'wek');

    return (
      <div>
        <div className="App">
          <p>{sendTo || 'Welcome.'}</p>
          <MailForm />
        </div>
        <div className="Navi">
          <SideBar />
        </div>
      </div>
    );
  }