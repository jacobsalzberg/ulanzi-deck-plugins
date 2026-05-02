const ACTION_CACHES = {};

// Connect with Tesouro IPCA UUID
$UD.connect('com.ulanzi.ulanzistudio.tesouroipca');

$UD.onConnected(conn => {
    console.log('Tesouro IPCA plugin connected');
});

// Add action to button
$UD.onAdd(jsn => {
    const context = jsn.context;
    if (!ACTION_CACHES[context]) {
        window.TesouroDisplayInstance = new TesouroDisplay(context);
        ACTION_CACHES[context] = window.TesouroDisplayInstance;
    }
});

// Active status
$UD.onSetActive(jsn => {
    const context = jsn.context;
    const instance = ACTION_CACHES[context];
    if (instance) {
        instance.setActive(jsn.active);
    }
});

// Run (Manual refresh on press)
$UD.onRun(jsn => {
    const context = jsn.context;
    const instance = ACTION_CACHES[context];
    if (instance) {
        instance.refresh();
    }
});

// Clear
$UD.onClear(jsn => {
    if (jsn.param) {
        jsn.param.forEach(item => {
            const context = item.context;
            if (ACTION_CACHES[context]) {
                ACTION_CACHES[context].destroy();
                delete ACTION_CACHES[context];
            }
        });
    }
});

$UD.onParamFromApp(jsn => {
    // Handle settings changes if any
});
