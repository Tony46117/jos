(function() {
    'use strict';

    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.getElementById('loading-progress');
    const loadingText = document.getElementById('loading-text');

    const loadingSteps = [
        { progress: 15, text: 'Loading assets...' },
        { progress: 35, text: 'Initializing products...' },
        { progress: 55, text: 'Preparing interface...' },
        { progress: 75, text: 'Setting up interactions...' },
        { progress: 95, text: 'Almost ready...' },
        { progress: 100, text: 'Welcome to Wa-Jose' }
    ];

    let currentStep = 0;

    function animateLoading() {
        if (currentStep < loadingSteps.length) {
            const step = loadingSteps[currentStep];
            loadingProgress.style.width = step.progress + '%';
            loadingText.textContent = step.text;
            currentStep++;

            const delay = currentStep === loadingSteps.length ? 600 : 400 + Math.random() * 300;
            setTimeout(animateLoading, delay);
        } else {
            setTimeout(hideLoadingScreen, 500);
        }
    }

    function hideLoadingScreen() {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }

    function init() {
        document.body.style.overflow = 'hidden';
        animateLoading();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('load', () => {
        if (!loadingScreen.classList.contains('hidden')) {
            loadingProgress.style.width = '100%';
            loadingText.textContent = 'Ready!';
            setTimeout(hideLoadingScreen, 400);
        }
    });
})();