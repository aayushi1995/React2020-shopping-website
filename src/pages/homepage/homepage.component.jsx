import React from 'react';

import {Directory} from './../../components/directory/directory.components';

import './homepage.styles.scss';

export const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
           <Directory/>
        </div>
    </div>
)