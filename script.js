const btn = document.getElementById('btn');
const text = document.getElementById('text');

const speak = (msg) => {
    const speech = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(speech);
};

/*
const commands = {
    "open youtube": () => {
        speak("Opening YouTube");
        window.open("https://youtube.com", "_blank");
    },
    "open facebook": () => {
        speak("Opening Facebook");
        window.open("https://facebook.com", "_blank");
    },
    "open calculator": () => {
        speak("Opening Calculator");
        // NOTE: Only works if you're running on a local Node.js server or .exe setup
        // alert("Opening Calculator - Not available in browser");
    },
    "hello": () => {
        speak("Hello, sir. How may I help you?");
    }
};
*/

const commands = {
    "open youtube": () => {
        speak("Opening YouTube");
        window.open("https://youtube.com", "_blank");
    },
    "open facebook": () => {
        speak("Opening Facebook");
        window.open("https://facebook.com", "_blank");
    },
    "open instagram" : () => {
        speak("opening instagram");
        window.open("https://instagram.com", "_blank");
    },
    "open github": () => {
        speak("Opening GitHub");
        window.open("https://github.com", "_blank");
    },
    "open spotify": () => {
        speak("Opening Spotify");
        window.open("https://open.spotify.com", "_blank");
        // Spotify auto-play needs user interaction, so browser won’t autoplay for privacy reasons.
        setTimeout(() => {
            speak("Please click play to start music");
        }, 2000);
    },
    "open vs code": () => {
        speak("Opening VS Code");
        speak("Sorry, I can't launch local apps from browser due to browser security restrictions.");
    },
    "hello": () => {
        speak("Hello, sir. How may I help you?");
    }
};

const runJarvis = (message) => {
    message = message.toLowerCase();
    text.innerText = "You said: " + message;
    for (let cmd in commands) {
        if (message.includes(cmd)) {
            commands[cmd]();
            return;
        }
    }
    speak("Sorry, I didn't get that.");
};

const startRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.onstart = () => {
        speak("Listening...");
        text.innerText = "Listening...";
    };
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        runJarvis(transcript);
    };
    recognition.start();
};

btn.addEventListener("click", startRecognition);