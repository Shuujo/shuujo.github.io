import { useEffect, useRef, useState } from 'react';
import Popup from './Popup.jsx';

import OC2021 from '../assets/portfolio pieces/HomePage/OC 2021.jpg';
import CoveSoda from '../assets/portfolio pieces/HomePage/CoveSoda.jpg';
import Kinjo from "../assets/portfolio pieces/Kinjo/Kinjo_Thumbnail.jpg";
import DemonsDen from '../assets/portfolio pieces/HomePage/Enter the Demons Den.jpg';
import Magazine from '../assets/portfolio pieces/HomePage/Pahang, Josh - Magazine.jpg';
import Magazine5 from '../assets/portfolio pieces/HomePage/Pahang, Josh - Magazine5.jpg';


// ========================================
// SETTINGS
// ========================================

const MAX_POPUPS = 15;

// Time between popups
const MIN_INTERVAL = 500;
const MAX_INTERVAL = 2000;

// How many times the popup should cascade
const CASCADE_LENGTH_DESKTOP = 8;
const CASCADE_LENGTH_MOBILE = 6;

// How far each popup moves down/right
const CASCADE_OFFSET_DESKTOP = 35;
const CASCADE_OFFSET_MOBILE = 25;

// Distance from right edge
const RIGHT_MARGIN_DESKTOP = 40;
const RIGHT_MARGIN_MOBILE = 15;

// Popup size
const POPUP_WIDTH_DESKTOP = 200;
const POPUP_HEIGHT_DESKTOP = 150;

const POPUP_WIDTH_MOBILE = 160;
const POPUP_HEIGHT_MOBILE = 120;


// ========================================
// IMAGES
// ========================================

const IMAGES = 
[
    OC2021,
    CoveSoda,
    DemonsDen,
    Magazine,
    Magazine5,
    Kinjo
];


// ========================================
// COMPONENT
// ========================================

export default function RepeatPopup({ visible }) {

    const [popups, setPopups] = useState([]);
    const nextId = useRef(0);
    const cascadeCount = useRef(0);
    const timeoutRef = useRef(null);

    // ========================================
    // GET RANDOM STARTING POSITION
    // ========================================

    const getRandomStartingPosition = () => {

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const isMobile = viewportWidth <= 768;

        const popupWidth = isMobile
            ? POPUP_WIDTH_MOBILE
            : POPUP_WIDTH_DESKTOP;

        const popupHeight = isMobile
            ? POPUP_HEIGHT_MOBILE
            : POPUP_HEIGHT_DESKTOP;

        const rightMargin = isMobile
            ? RIGHT_MARGIN_MOBILE
            : RIGHT_MARGIN_DESKTOP;


        // Keep the popup somewhere on the right side
        const minX = viewportWidth * 0.55;
        const maxX = viewportWidth - popupWidth - rightMargin;

        const x = Math.max(
            minX,
            Math.random() * (maxX - minX) + minX
        );

        const maxY =
            Math.max(
                0,
                viewportHeight -
                popupHeight -
                30
            );

        const y =
            Math.random() * maxY;

        return {
            x,
            y
        };
    };


    // ========================================
    // CREATE POPUP
    // ========================================

    const createPopup = () => {
        setPopups((currentPopups) => {

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const isMobile = viewportWidth <= 768;


            const popupWidth = isMobile
                ? POPUP_WIDTH_MOBILE
                : POPUP_WIDTH_DESKTOP;

            const popupHeight = isMobile
                ? POPUP_HEIGHT_MOBILE
                : POPUP_HEIGHT_DESKTOP;

            const cascadeOffset = isMobile
                ? CASCADE_OFFSET_MOBILE
                : CASCADE_OFFSET_DESKTOP;

            const cascadeLength = isMobile
                ? CASCADE_LENGTH_MOBILE
                : CASCADE_LENGTH_DESKTOP;

            let posX;
            let posY;


            // ========================================
            // FIRST POPUP
            // ========================================

            if (currentPopups.length === 0) 
            {
                const startingPosition =
                    getRandomStartingPosition();

                posX = startingPosition.x;
                posY = startingPosition.y;

                cascadeCount.current = 1;

            }

            // ========================================
            // NEXT POPUPS
            // ========================================

            else 
            {
                const previousPopup = currentPopups[currentPopups.length - 1];

                posX = previousPopup.posX + cascadeOffset;

                posY = previousPopup.posY + cascadeOffset;


                const reachedRight = posX + popupWidth >= (viewportWidth - popupWidth);

                const reachedBottom = posY + popupHeight >= (viewportHeight - (popupHeight * 2));

                const reachedCascadeLimit = cascadeCount.current >= cascadeLength;

                // ========================================
                // START NEW CASCADE
                // ========================================

                if (reachedRight || reachedBottom || reachedCascadeLimit) 
                {
                    const startingPosition = getRandomStartingPosition();

                    posX = startingPosition.x;
                    posY = startingPosition.y;

                    cascadeCount.current = 1;
                }
                else 
                {
                    cascadeCount.current += 1;
                }
            }


            // ========================================
            // RANDOM IMAGE
            // ========================================

            const randomImage =
                IMAGES[
                    Math.floor(
                        Math.random() *
                        IMAGES.length
                    )
                ];


            // ========================================
            // CREATE OBJECT
            // ========================================

            const newPopup = {
                id: nextId.current++,
                src: randomImage,
                posX,
                posY
            };


            // ========================================
            // KEEP ONLY MAX POPUPS
            // ========================================

            return [...currentPopups,newPopup].slice(-MAX_POPUPS);
        });


        // ========================================
        // RANDOM TIME UNTIL NEXT POPUP
        // ========================================

        const nextDelay =
            Math.random() *
            (MAX_INTERVAL - MIN_INTERVAL) +
            MIN_INTERVAL;


        timeoutRef.current =
            setTimeout(
                createPopup,
                nextDelay
            );

    };


    // ========================================
    // START POPUP LOOP
    // ========================================

    useEffect(() => {

        timeoutRef.current =
            setTimeout(
                createPopup,
                500
            );


        return () => {

            clearTimeout(
                timeoutRef.current
            );

        };

    }, []);


    // ========================================
    // CLOSE POPUP
    // ========================================

    const closePopup = (id) => {

        setPopups((currentPopups) =>
            currentPopups.filter(
                (popup) =>
                    popup.id !== id
            )
        );

    };


    // ========================================
    // RENDER
    // ========================================

    return (
        <div className={`popup-wrapper ${visible ? "popup-visible" : "popup-hidden"}`}>
          {popups.map((popup) => (
            <Popup
              key={popup.id}
              id={popup.id}
              src={popup.src}
              posX={popup.posX}
              posY={popup.posY}
              onClose={closePopup}
            />
          ))}
        </div>
      )

}