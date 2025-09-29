//RIGHT PANEL > Language switcher

document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('lang-switch');
    const flagEl = document.getElementById('lang-flag');
    const root = document.documentElement;

    //map languages to flags
    const langToFlag = {
        en: 'fi-gb',
        de: 'fi-de',
        fr: 'fi-fr',
        pl: 'fi-pl'
    };

    function applyLanguage(code) {
        const lang = (code || 'en').toLowerCase();
        root.lang = lang;
        if (flagEl) flagEl.className = `fi ${langToFlag[lang] || 'fi-gb'}`;
    }

    if (langSwitch && flagEl) {
        //default value
        applyLanguage(langSwitch.value);

        //change by choice
        langSwitch.addEventListener('change', (e) => applyLanguage(e.target.value));
    }
});

// > Theme toggle

const btnTheme = document.getElementById('btn-theme');
const THEME_KEY = 'cv_theme';

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    if (btnTheme) {
        btnTheme.innerHTML = 
        theme === 'light'
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>'
    }

    try {
        localStorage.setItem(THEME_KEY, theme);} catch{}
}

    const savedTheme = (() => {
        try { return localStorage.getItem(THEME_KEY); } catch { return null; }
    })();
    setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark');

    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            setTheme(next);
        });
}




