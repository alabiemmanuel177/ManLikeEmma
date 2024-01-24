import React, { useEffect, useState } from 'react';
import './preloader.css';

export const Preloader = () => {
    const [companyName, setCompanyName] = useState('');
    const [isCompanyNameDone, setIsCompanyNameDone] = useState(false);
    const companyNameText = 'ManLikeEmma';
    const [isDone] = useState(true);


    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            setCompanyName(prevName => prevName + companyNameText[currentIndex]);
            currentIndex++;
            if (currentIndex === companyNameText.length) {
                clearInterval(typingInterval);
                setIsCompanyNameDone(true);
            }
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    }, []);

    useEffect(() => {
        if (isCompanyNameDone) {
            const fadeOutTimeout = setTimeout(() => {
                setIsCompanyNameDone(false);
            }, 2000); // Adjust the fade-out duration as needed

            return () => {
                clearTimeout(fadeOutTimeout);
            };
        }
    }, [isCompanyNameDone]);

    return (
        <div className={`preloader ${isCompanyNameDone ? 'fade-out' : ''}`}>
            <img src="./logo/white_logo.svg" alt="Logo" className={`logo ${isCompanyNameDone ? 'fade-out' : ''}`} />
            <div className="company">
                <h1 className={`company-name ${isCompanyNameDone ? 'fade-out' : ''}`}>
                    {companyNameText.substring(0, companyName.length)}
                </h1>
                {isDone && <h2 className={`portfolio ${isCompanyNameDone ? 'fade-out' : ''}`}>Portfolio</h2>}

            </div>
        </div>
    );
};

