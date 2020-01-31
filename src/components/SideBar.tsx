import React, { useState } from 'react';
import {
  useHistory
} from 'react-router-dom';

interface IMailForm {
    sendTo: string;
    title: string;
    descript: string;
}

const listitems: string[] = ['apple', 'baby', 'cnady'];

export const SideBar: React.FC = () => {

    const history = useHistory();

    return (
      <div>
          {listitems.map((txt: string, index: number) => <p key={index}>{txt}</p>)}
      </div>
    );
  }