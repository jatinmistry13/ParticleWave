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

    for (var x = -300; x < 300; x += 5) {
        for (var z = -250; z < 250; z += 5) {
            particles.push({x: x, y: 100, z: z});
        }
    }

    // Render the canvas context
    function render(time_elapsed) {
        
        var len = particles.length,
            fov = 250,
            particle, scale,
            x2d, y2d, c;

        for (var i = 0; i < len; i++) {
            particle = particles[i];

            particle.x = 20;
            particle.y = 20;
            particle.z = 20;

        }

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
