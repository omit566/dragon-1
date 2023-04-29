import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempore alias eum labore numquam, nemo quasi odit nam, quas facilis facere aliquam repudiandae, sunt tempora assumenda voluptatem rem eveniet minus commodi est autem. Ab, tempore consectetur quas facilis aspernatur culpa.</p>
            <p>Go back to<Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;