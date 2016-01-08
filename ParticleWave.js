/**
 * Create a Particle Wave system on canvas through javascript.
 * @author Jatin Mistry
 */
 
(function() {
    var d,canvas;
    d = document;
    canvas = d.body.appendChild(d.createElement('canvas'));
    
    //var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var width = 0;
    var height = 0;

    // Render the canvas context
    function render(ctx) {
        ctx.save();
        
        // TODO

        ctx.restore();
    }

    // Update Canvas
    function update() {
        
        // TODO
    }

    // Take a screenshot
    function Screenshot() {
        window.open(canvas.toDataURL());
    }
    
    // Perform animation
    (function animate() {
        // rAF.js
        requestAnimationFrame(animate);
        update();
        render(ctx);
    })();
    
})();
