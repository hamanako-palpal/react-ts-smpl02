import React, { useState } from 'react';
import '../App.css';
import {MailForm} from './MailForm';
import {SideBar} from './SideBar';

export const About: React.FC = () => {

    return (
      <div>
        <div className="App">
          <p>shaka</p>
          <MailForm />
        </div>
        <div className="Navi">
          <SideBar />
        </div>
      </div>
    );
  }