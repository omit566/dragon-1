import React from 'react';
import NavigationBar from '../shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogInLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        </div>
    );
};

export default LogInLayout;