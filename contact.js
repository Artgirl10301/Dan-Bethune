document.addEventListener("DOMContentLoaded", function() {
    function updateTimeAndDate() {
        const now = new Date();
        const time = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = now.toLocaleDateString('en-US', options);
        
        document.getElementById('time').textContent = time;
        document.getElementById('date').textContent = date;
    }

    // Update time and date every second
    setInterval(updateTimeAndDate, 1000);
    updateTimeAndDate(); // Initial call to display immediately
});