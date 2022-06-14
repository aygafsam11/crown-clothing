import React from "react";
import './homepage.styles.scss';
import Directory from "../../component/directory/directory.component";

const HomePage = ({history}) => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;