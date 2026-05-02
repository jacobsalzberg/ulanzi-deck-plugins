/**
 * ClockDisplay - Core class for Pacific Time clock display
 */
function ClockDisplay(ctx) {
    var context = ctx,
        canvas = null,
        canvasContext = null,
        refreshTimer = 0,
        isActive = true,
        allowSend = true;

    function initialize() {
        // Create 512x512px canvas for button display
        canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        canvasContext = canvas.getContext('2d');

        setupCanvasStyle();
        startClock();
    }

    function setupCanvasStyle() {
        if (!canvasContext) return;
        canvasContext.textAlign = 'center';
        canvasContext.textBaseline = 'middle';
    }

    function renderTime() {
        if (!canvasContext || !allowSend || !isActive) return;

        // Clear canvas with standard background
        canvasContext.fillStyle = '#000000';
        canvasContext.fillRect(0, 0, 512, 512);

        // Get PT Time
        const now = new Date();
        const ptFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Los_Angeles',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hourCycle: 'h23',
            hour12: false
        });
        
        const ptParts = ptFormatter.formatToParts(now);
        const timeStr = `${ptParts.find(p => p.type === 'hour').value}:${ptParts.find(p => p.type === 'minute').value}`;

        // Draw Time (Final size: 195px)
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.font = 'bold 195px Source Han Sans SC, sans-serif';
        canvasContext.fillText(timeStr, 256, 280);

        // Draw Label (Reduced size for better balance)
        canvasContext.fillStyle = '#AAAAAA';
        canvasContext.font = 'bold 50px Source Han Sans SC, sans-serif';
        canvasContext.fillText('SF - PT', 256, 60);

        // Update button display
        updateButtonDisplay();

        // Update bridge page UI if it exists
        const uiElement = document.getElementById('current-pt-time');
        if (uiElement) {
            uiElement.innerText = timeStr;
        }
    }

    function updateButtonDisplay() {
        if (!canvas || !allowSend) return;
        try {
            const imageData = canvas.toDataURL('image/png');
            $UD.setBaseDataIcon(context, imageData, '');
        } catch (error) {
            console.error('Failed to update button display:', error);
        }
    }

    function startClock() {
        if (refreshTimer) clearInterval(refreshTimer);
        
        // Initial render
        renderTime();

        // Update every second
        refreshTimer = setInterval(function() {
            if (isActive) {
                renderTime();
            }
        }, 1000);
    }

    function setActive(active) {
        isActive = active && active.toString() === "true";
        allowSend = isActive;
        if (isActive) {
            renderTime();
        }
    }

    function destroy() {
        if (refreshTimer) {
            clearInterval(refreshTimer);
            refreshTimer = 0;
        }
    }

    // Initialize on creation
    initialize();

    return {
        setActive: setActive,
        destroy: destroy,
        triggerRefresh: renderTime, // Required by app.js logic
        getIsActive: () => isActive,
        getRefreshInterval: () => 1/60, // 1 second in minutes
        setRefreshInterval: () => {} // Clock is fixed at 1s
    };
}
