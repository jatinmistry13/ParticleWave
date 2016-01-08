/**
 * Create a Particle Wave system on canvas through javascript.
 * @author Jatin Mistry
 */
 
(function() {
    var d,canvas;
    d = document;
    canvas = d.body.appendChild(d.createElement('canvas'));

    var startTime = new Date().getTime();
    function seconds_elapsed () { 
        var time_now = new Date().getTime (); 
        var time_diff = time_now - startTime; 
        var seconds_elapsed = time_diff; 
        return ( seconds_elapsed ); 
    }

    //time_elapsed = seconds_elapsed();
    var ctx = canvas.getContext('2d'),
        WIDTH = canvas.width = window.innerWidth,
        HEIGHT = canvas.height = window.innerHeight,
        particles = [];

    // Render the canvas context
    function render(time_elapsed) {
        //TODO
    }

    // Take a screenshot
    function Screenshot() {
        window.open(canvas.toDataURL());
    }
    
    // Perform animation
    (function animate() {
        // rAF.js
        requestAnimationFrame(animate, canvas);

        // update
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        time_elapsed = seconds_elapsed();
        
        // render
        render(time_elapsed);
    })();
    
})();
