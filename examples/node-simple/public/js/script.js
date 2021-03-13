if ('serviceWorker' in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                return registration.update();
            })
    });
}