import React, { useState } from 'react';
import {
  useHistory
} from 'react-router-dom';

interface IMailForm {
    sendTo: string;
    title: string;
    descript: string;
}

const listitems: string[] = ['apple', 'baby', 'candy'];

export const SideBar: React.FC = () => {

    const history = useHistory();

    return (
      <div>
          {listitems
            .map((txt: string, index: number) => <p key={index}>
              <a href={'/about/'+txt}>{txt}</a>
              </p>)
          }
      </div>
    );
  }