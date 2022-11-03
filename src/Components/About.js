import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const About = () => {
    const name=useContext(AuthContext);
    console.log(name);
    return (
        <div>
            
        </div>
    );
};

export default About;