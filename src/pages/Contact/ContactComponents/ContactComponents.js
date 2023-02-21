import React, { useEffect } from 'react';

const ContactComponents = () => {
    useEffect(() => {
        window.scrollTo(0,0)
        }, [])
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
};

export default ContactComponents;