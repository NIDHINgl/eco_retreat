import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const PreviousArrow = ({ onClick, isVisible=true }) => (
    <button
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 z-10 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onClick={onClick}
        style={{ background: 'transparent', border: 'none' }}
    >
        <FaChevronLeft className="text-2xl text-white" />
    </button>
);

export const NextArrow = ({ onClick, isVisible=true }) => (
    <button
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 z-10 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onClick={onClick}
        style={{ background: 'transparent', border: 'none' }}
    >
        <FaChevronRight className="text-2xl text-white" />
    </button>
);