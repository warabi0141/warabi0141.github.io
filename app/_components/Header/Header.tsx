"use client"

import { useState } from 'react';
import { Navigation } from './Navigation';
import { ToggleButton } from './ToggleButton';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleFunction = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <header>
            <ToggleButton isOpen={isOpen} onClick={toggleFunction}></ToggleButton>
            <Navigation id="navigation" isOpen={isOpen}></Navigation>
        </header>
    );
}