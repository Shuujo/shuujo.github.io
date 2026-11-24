import { useEffect, useRef, useState } from 'react';

export default function Popup({ id, posX, posY, src, onClose }) {

    const [position, setPosition] = useState({
        x: posX,
        y: posY
    });

    const [isDragging, setIsDragging] = useState(false);

    const dragOffset = useRef({
        x: 0,
        y: 0
    });


    const handleMouseDown = (e) => {
        // Only allow dragging with the left mouse button
        if (e.button !== 0) return;

        const popup = e.currentTarget.parentElement;
        const rect = popup.getBoundingClientRect();

        dragOffset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        setIsDragging(true);
        e.preventDefault();
    };


    useEffect(() => {
        if (!isDragging) return;
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX - dragOffset.current.x,
                y: e.clientY - dragOffset.current.y
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

    }, [isDragging]);


    const popStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'default'
    };


    return (
        <div className="pop-up-container" style={popStyle}>
            <div className="pop-up-bar" onMouseDown={handleMouseDown}>
                <button className="pop-up-close" type="button" onClick={() => onClose(id)}>
                    &#215;
                </button>
            </div>
            <img className="pop-up-bg" src={src} alt="Portfolio piece"/>
        </div>
    );
}