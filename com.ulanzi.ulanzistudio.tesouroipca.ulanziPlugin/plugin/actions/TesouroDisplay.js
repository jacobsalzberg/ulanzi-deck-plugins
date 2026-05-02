class TesouroDisplay {
    constructor(context) {
        this.context = context;
        this.isActive = false;
        this.canvas = document.createElement('canvas');
        this.canvas.width = 512;
        this.canvas.height = 512;
        this.ctx = this.canvas.getContext('2d');
        
        this.currentRate = '--%';
        this.marketSource = 'WAIT';
        this.lastUpdate = '00:00';
    }

    setActive(active) {
        this.isActive = active;
        if (active) this.render();
    }

    render() {
        if (!this.isActive) return;

        const ctx = this.ctx;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 512, 512);

        // Header Title
        ctx.textAlign = 'center';
        ctx.fillStyle = '#8b949e';
        ctx.font = 'bold 45px sans-serif';
        ctx.fillText('IPCA+ 2032', 256, 75);

        // Rate Value
        ctx.fillStyle = '#58a6ff';
        ctx.font = 'bold 150px sans-serif';
        // Make font smaller if the text is too long (e.g. error messages)
        if (this.currentRate.length > 6) ctx.font = 'bold 100px sans-serif';
        ctx.fillText(this.currentRate, 256, 280);

        // Source & Time (Bottom Section)
        ctx.fillStyle = '#30363d';
        ctx.fillRect(50, 360, 412, 100);
        
        ctx.fillStyle = '#c9d1d9';
        ctx.font = 'bold 45px sans-serif';
        ctx.fillText(`${this.marketSource} • ${this.lastUpdate}`, 256, 425);

        const data = this.canvas.toDataURL('image/png');
        $UD.setBaseDataIcon(this.context, data);
    }
}
