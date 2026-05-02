/**
 * PT Clock Plugin - Main Service
 */

const ACTION_CACHES = {};

// Connect with PT Clock UUID
$UD.connect('com.ulanzi.ulanzistudio.ptclock');

$UD.onConnected(conn => {
    console.log('PT Clock plugin connected to UlanziDeck');
});

$UD.onAdd(jsn => {
    const context = jsn.context;
    if (!ACTION_CACHES[context]) {
        try {
            ACTION_CACHES[context] = new ClockDisplay(context);
            console.log('Created new ClockDisplay instance for context:', context);
        } catch (error) {
            console.error('Failed to create ClockDisplay instance:', context, error);
        }
    } else {
        ACTION_CACHES[context].triggerRefresh();
    }
});

$UD.onSetActive(jsn => {
    const context = jsn.context;
    const instance = ACTION_CACHES[context];
    if (instance) {
        instance.setActive(jsn.active);
    }
});

$UD.onRun(jsn => {
    const context = jsn.context;
    const instance = ACTION_CACHES[context];
    if (instance) {
        instance.triggerRefresh();
    } else {
        $UD.emit('add', jsn);
    }
});

$UD.onClear(jsn => {
    if (jsn.param) {
        jsn.param.forEach(p => {
            const context = p.context;
            if (ACTION_CACHES[context]) {
                ACTION_CACHES[context].destroy();
                delete ACTION_CACHES[context];
            }
        });
    }
});

$UD.onParamFromApp(jsn => {
    // No settings for this simple clock yet
});

window.addEventListener('beforeunload', () => {
    Object.keys(ACTION_CACHES).forEach(context => {
        ACTION_CACHES[context].destroy();
        delete ACTION_CACHES[context];
    });
});
