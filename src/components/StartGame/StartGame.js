import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const StartGame = (props) => {
    const Navigate = useNavigate()
    const handleStartGame = () => {
        Navigate('/Ingame')
    }
    return (
        <div>
            <h1 className="mt-5" style={{ color: 'white' }}> Welcome to React Quiz Game!</h1>
            <button className="btn btn-success btn-Start px-5 mt-3"
                style={{ backgroundColor: '#6ED5B7', border: 'none', color: 'black', fontSize: '30px' }}
                onClick={() => { handleStartGame() }}
            >Start </button>
        </div>
    );
};

export default StartGame;   