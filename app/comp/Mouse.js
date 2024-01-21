"use client"
import { useEffect, useState } from 'react';
import ballSt from '../pages/mouse/mouse.module.scss';

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
}

function RandomBalls() {
    const [mousePos, setMousePos] = useState({ x: -1, y: -1 });

    const handleMouseMove = (e) => {
        setMousePos((prevMousePos) => ({
            x: e.pageX,
            y: e.pageY,
        }));
    };

    const handleMouseLeave = () => {
        setMousePos({ x: -1, y: -1 });
    };

    useEffect(() => {

        const drawBalls = () => {
            if (mousePos.x > 0 && mousePos.y > 0) {
                const range = 1;

                const color = `rgb(${getRandomInt(255,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`;

                const sizeInt = getRandomInt(10, 10);
                const size = `height: ${sizeInt}px; width: ${sizeInt}px;`;

                const left = `left: ${getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range)}px;`;

                const top = `top: ${getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range)}px;`;

                const style = `${left}${top}background: ${color};${size}`;

                const ball = document.createElement('div');
                ball.className = ballSt.ball;
                ball.setAttribute('style', style);

                ball.addEventListener('animationend', () => {
                    ball.remove();
                });

                const wrapElement = document.getElementById('wrap');
                if (wrapElement) {
                    wrapElement.appendChild(ball);
                }
            }
        };

        const intervalId = setInterval(drawBalls, 1);

        // Cleanup
        return () => {
            clearInterval(intervalId);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mousePos]);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return null;
}

export default RandomBalls;