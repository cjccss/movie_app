import React from "react";
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Detail(){
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === null) {
            navigate('/');
        }
    });

    if (location.state) {
        const { title } = location.state;
        return <span>{title}</span>;
    }
    return null;
}
