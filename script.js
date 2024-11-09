function christmasCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmas = new Date(currentYear, 11, 25);

    if (now > christmas) {
        christmas.setFullYear(currentYear + 1);
    }

    const difference = christmas.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div class="candy-cane-frame">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="1000px" height="1000px" viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve" class="animated-candycane">
                <g>
                    <path class="st0" d="M701.1,950.1c-50.4,21.3-60.2,0.5-60.2,0.5L508,748.3L375.2,950.6c0,0-9.9,20.8-60.2-0.6
                        c-61.2-25.9-53.7-62.7-53.7-62.7S308.2,815,368,726h125.4h29.3H648c59.8,89,106.7,161.4,106.7,161.4S762.3,924.2,701.1,950.1z
                        M855.3,131.8c-78.8-53.7-117.5-34.7-155.1-24.9c-37.7,9.8-72,53.1-92.5,83.1c-7.1,10.4-52.2,78.6-108,162.9
                        C444,268.6,398.9,200.5,391.8,190c-20.4-30.1-54.8-73.3-92.5-83.1c-37.6-9.9-76.3-28.8-155.1,24.9
                        c-151,102.8,19.3,299.9,19.3,299.9s39.7-1.6,59.7-16c18.7-13.6,30.7-26.1,38.2-35.6c7-8.9,6.6-21.5-1.1-29.9
                        c-25.5-27.9-73.3-98.5-34.8-122.4c23.2-14.4,46.1,11.2,46.1,11.2L412.6,454h20.1h134h20.1l140.9-214.9c0,0,22.9-25.7,46.1-11.3
                        c38.5,23.9-9.3,94.5-34.8,122.4c-7.7,8.4-8.1,21-1.1,29.9c7.5,9.5,19.5,22,38.2,35.6c20,14.4,59.7,16,59.7,16
                        S1006.2,234.6,855.3,131.8z"/>
                </g>
            </svg>
            <div class="countdown-content">
                <div class="countdown-item">
                    <span class="number days">${days}</span>
                    <span class="label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="number hours">${hours}</span>
                    <span class="label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="number minutes">${minutes}</span>
                    <span class="label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span class="number seconds">${seconds}</span>
                    <span class="label">Seconds</span>
                </div>
            </div>
        </div>
    `;

    addNumberAnimations();
}

function addNumberAnimations() {
    const numberElements = document.querySelectorAll('.number');
    
    numberElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('pulse');
        });
        
        el.addEventListener('mouseleave', () => {
            el.classList.remove('pulse');
        });

        el.addEventListener('click', () => {
            el.classList.add('bounce');
            setTimeout(() => {
                el.classList.remove('bounce');
            }, 500);
        });
    });
}

function triggerSigmaEasterEgg() {
    const easterEggPopup = document.createElement('div');
    easterEggPopup.classList.add('easter-egg-popup');
    easterEggPopup.innerHTML = `
        <div class="easter-egg">
            <h2>You think you're Sigma?</h2>
            <p>Looks like someone discovered the secret Sigma mode!</p>
            <button class="close-btn">Close</button>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            0% {
                transform: scale(0.7) rotate(-10deg);
                opacity: 0;
            }
            70% {
                transform: scale(1.05) rotate(5deg);
                opacity: 0.8;
            }
            100% {
                transform: scale(1) rotate(0);
                opacity: 1;
            }
        }

        @keyframes backgroundFadeIn {
            from {
                background: rgba(0,0,0,0);
            }
            to {
                background: rgba(0,0,0,0.5);
            }
        }

        .easter-egg-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: backgroundFadeIn 0.3s ease-out forwards;
        }

        .easter-egg {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            max-width: 400px;
            text-align: center;
            animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            transform-origin: center;
        }

        .close-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
            transition: all 0.2s ease;
        }

        .close-btn:hover {
            background: rgba(255, 255, 255, 0.4);
            transform: scale(1.05);
        }
    `;

    document.body.appendChild(style);
    document.body.appendChild(easterEggPopup);

    const closeBtn = easterEggPopup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        easterEggPopup.style.animation = 'popOut 0.3s ease-in forwards';
        setTimeout(() => {
            document.body.removeChild(easterEggPopup);
            document.body.removeChild(style);
        }, 300);
    });
}

const exitStyle = document.createElement('style');
exitStyle.textContent = `
    @keyframes popOut {
        0% {
            transform: scale(1) rotate(0);
            opacity: 1;
        }
        100% {
            transform: scale(0.7) rotate(10deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(exitStyle);

(function() {
    const konamiCode = [
        'ArrowUp', 
        'ArrowUp', 
        'ArrowDown', 
        'ArrowDown', 
        'ArrowLeft', 
        'ArrowRight', 
        'ArrowLeft', 
        'ArrowRight', 
        'b', 
        'a'
    ];

    let konamiProgress = 0;

    function triggerAlphaEasterEgg() {
        const alphaEggPopup = document.createElement('div');
        alphaEggPopup.classList.add('alpha-egg-popup');
        alphaEggPopup.innerHTML = `
            <div class="alpha-easter-egg">
                <h2>Alpha Mode Activated! 🐺</h2>
                <p>You've unlocked the legendary Alpha Easter Egg! Who's the real pack leader now?</p>
                <button class="close-btn">Close Alpha Mode</button>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes alphaPopIn {
                0% {
                    transform: scale(0.7) rotate(-15deg);
                    opacity: 0;
                }
                70% {
                    transform: scale(1.1) rotate(7deg);
                    opacity: 0.8;
                }
                100% {
                    transform: scale(1) rotate(0);
                    opacity: 1;
                }
            }

            .alpha-egg-popup {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.6);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            }

            .alpha-easter-egg {
                background: linear-gradient(135deg, #2c3e50, #3498db);
                color: white;
                border-radius: 20px;
                padding: 40px;
                max-width: 450px;
                text-align: center;
                animation: alphaPopIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            }

            .alpha-easter-egg h2 {
                color: #fff;
                margin-bottom: 15px;
            }

            .alpha-easter-egg .close-btn {
                background: rgba(255,255,255,0.2);
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 8px;
                cursor: pointer;
                margin-top: 20px;
                transition: all 0.3s ease;
            }

            .alpha-easter-egg .close-btn:hover {
                background: rgba(255,255,255,0.4);
                transform: scale(1.05);
            }
        `;

        document.body.appendChild(style);
        document.body.appendChild(alphaEggPopup);

        const closeBtn = alphaEggPopup.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            alphaEggPopup.style.animation = 'popOut 0.3s ease-in forwards';
            setTimeout(() => {
                document.body.removeChild(alphaEggPopup);
                document.body.removeChild(style);
            }, 300);
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === konamiCode[konamiProgress]) {
            konamiProgress++;

            if (konamiProgress === konamiCode.length) {
                triggerAlphaEasterEgg();
                konamiProgress = 0;
            }
        } else {
            konamiProgress = 0;
        }
    });
})();

function triggerBraindeadEasterEgg() {
    const brainrotEggPopup = document.createElement('div');
    brainrotEggPopup.classList.add('brainrot-egg-popup');
    brainrotEggPopup.innerHTML = `
        <div class="brainrot-easter-egg">
            <h2>BRAINDEAD ACTIVATED 🧠💥</h2>
            <p>ur brain just went *bzzzt* 404 brain not found lmaooo 💀🤪</p>
            <button class="close-btn">close brain.exe</button>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes brainrotWobble {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            10% { transform: translate(-5px, -5px) rotate(-5deg); }
            20% { transform: translate(5px, 5px) rotate(5deg); }
            30% { transform: translate(-3px, 3px) rotate(-3deg); }
            40% { transform: translate(3px, -3px) rotate(3deg); }
            50% { transform: scale(1.05) rotate(0deg); }
        }

        @keyframes glitchText {
            0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); }
            5% { clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%); }
            10% { clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%); }
        }

        .brainrot-egg-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            overflow: hidden;
        }

        .brainrot-easter-egg {
            background: rgba(0, 0, 0, 0.8);
            color: #00ff00;
            border-radius: 15px;
            padding: 30px;
            max-width: 400px;
            text-align: center;
            animation: brainrotWobble 0.5s infinite;
            font-family: monospace;
        }

        .brainrot-easter-egg h2 {
            animation: glitchText 0.3s infinite;
            color: #ff0000;
        }

        .brainrot-easter-egg p {
            animation: glitchText 0.4s infinite alternate;
            color: #00ff00;
        }

        .close-btn {
            background: #ff0000;
            color: white;
            border: none;
            padding: 10px 20px;
            margin-top: 15px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .close-btn:hover {
            background: #ff4500;
            transform: scale(1.1);
        }
    `;

    document.body.appendChild(style);
    document.body.appendChild(brainrotEggPopup);

    const closeBtn = brainrotEggPopup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(brainrotEggPopup);
        document.body.removeChild(style);
    });
}

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'b') {
        triggerBraindeadEasterEgg();
    }
});

function triggerFreakyModeEasterEgg() {
    const freakyModePopup = document.createElement('div');
    freakyModePopup.classList.add('freaky-mode-popup');
    freakyModePopup.innerHTML = `
        <div class="freaky-easter-egg">
            <h2>Feeling Freaky? 😳</h2>
            <p>Someone's got a little extra spice today! Your real freaky👅</p>
            <button class="close-btn">Bonk! Close</button>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            0% {
                transform: scale(0.7) rotate(-10deg);
                opacity: 0;
            }
            70% {
                transform: scale(1.05) rotate(5deg);
                opacity: 0.8;
            }
            100% {
                transform: scale(1) rotate(0);
                opacity: 1;
            }
        }

        @keyframes popOut {
            0% {
                transform: scale(1) rotate(0);
                opacity: 1;
            }
            100% {
                transform: scale(0.7) rotate(10deg);
                opacity: 0;
            }
        }

        @keyframes blush {
            0%, 100% { 
                background-color: rgba(255,192,203,0.2);
            }
            50% { 
                background-color: rgba(255,105,180,0.3);
            }
        }

        .freaky-mode-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255,192,203,0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            animation: blush 2s infinite alternate;
        }

        .freaky-easter-egg {
            background: rgba(255,255,255,0.9);
            border-radius: 20px;
            padding: 30px;
            max-width: 400px;
            text-align: center;
            animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .freaky-easter-egg h2 {
            color: #ff69b4;
        }

        .freaky-easter-egg p {
            color: black;
        }

        .close-btn {
            background: #ff1493;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            margin-top: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .close-btn:hover {
            background: #ff69b4;
            transform: scale(1.1);
        }
    `;

    document.body.appendChild(style);
    document.body.appendChild(freakyModePopup);

    const closeBtn = freakyModePopup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        freakyModePopup.style.animation = 'popOut 0.3s forwards';
        setTimeout(() => {
            document.body.removeChild(freakyModePopup);
            document.body.removeChild(style);
        }, 300);
    });
}

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'F') {
        triggerFreakyModeEasterEgg();
    }
});

function triggerNerdEasterEgg() {
    const nerdEggPopup = document.createElement('div');
    nerdEggPopup.classList.add('nerd-egg-popup');
    nerdEggPopup.innerHTML = `
        <div class="nerd-easter-egg">
            <h2>🤓 NERD ALERT ACTIVATED! 💻</h2>
            <p>Congratulations! You've unlocked peak coding enthusiasm. 
               Debug mode: Engaged. Caffeine levels: Maximum. 
               Social skills: Optional.</p>
            <div class="nerd-stats">
                <span>Code Quality: 💯</span>
                <span>Glasses Reflection: ✨</span>
                <span>Keyboard Clacks: 🔊</span>
            </div>
            <button class="close-btn">Compile & Exit</button>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes nerdGlitch {
            0% { transform: skew(0deg, 0deg); }
            25% { transform: skew(2deg, 1deg); }
            50% { transform: skew(-1deg, -2deg); }
            75% { transform: skew(1deg, 2deg); }
            100% { transform: skew(0deg, 0deg); }
        }

        .nerd-egg-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3000;
            font-family: 'Courier New', monospace;
        }

        .nerd-easter-egg {
            background: #1e1e1e;
            color: #00ff00;
            border: 2px solid #00ff00;
            border-radius: 10px;
            padding: 30px;
            max-width: 500px;
            text-align: center;
            animation: nerdGlitch 0.3s infinite alternate;
        }

        .nerd-stats {
            display: flex;
            flex-direction: column;
            margin: 20px 0;
            gap: 10px;
        }

        .close-btn {
            background: #00ff00;
            color: black;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .close-btn:hover {
            background: #00cc00;
            transform: scale(1.05);
        }
    `;

    document.body.appendChild(style);
    document.body.appendChild(nerdEggPopup);

    const closeBtn = nerdEggPopup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(nerdEggPopup);
        document.body.removeChild(style);
    });
}

function triggerZenEasterEgg() {
    const zenEggPopup = document.createElement('div');
    zenEggPopup.classList.add('zen-egg-popup');
    zenEggPopup.innerHTML = `
        <div class="zen-easter-egg">
            <h2>Zen Mode Activated</h2>
            <p>Breathe in code, breathe out bugs. 
               You've found inner peace in my code.</p>
            <div class="zen-mantra">
                <span>Calm as a semicolon</span>
                <span>Peaceful as a well-indented block</span>
                <span>Serene as a perfectly optimized algorithm</span>
            </div>
            <button class="close-btn">Return to Harmony</button>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
        }

        .zen-egg-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #87CEEB, #E0FFFF);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3000;
            font-family: 'Helvetica Neue', sans-serif;
        }

        .zen-easter-egg {
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            color: #2F4F4F;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            text-align: center;
            animation: breathe 3s infinite ease-in-out;
        }

        .zen-mantra {
            display: flex;
            flex-direction: column;
            margin: 20px 0;
            gap: 10px;
            font-style: italic;
        }

        .close-btn {
            background: #2E8B57;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 5px;
        }

        .close-btn:hover {
            background: #3CB371;
            transform: scale(1.05);
        }
    `;

    document.body.appendChild(style);
    document.body.appendChild(zenEggPopup);

    const closeBtn = zenEggPopup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(zenEggPopup);
        document.body.removeChild(style);
    });
}

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'z') {
        triggerNerdEasterEgg();
    }

    if (event.ctrlKey && event.key === 'y') {
        triggerZenEasterEgg();
    }
});


function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`;
    snowflake.style.opacity = Math.random();
    
    const size = Math.random() * 5 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    
    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

function startSnowfall() {
    setInterval(createSnowflake, 200);
}

setInterval(christmasCountdown, 1000);

window.addEventListener('load', () => {
    christmasCountdown();
    startSnowfall();
});
