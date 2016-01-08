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
            imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT),
            particle, scale,
            x2d, y2d, c, amplitude;
        amplitude = 100;

        for (var i = 0; i < len; i++) {
            particle = particles[i];
            scale = fov / (fov + particle.z);
            x2d = particle.x * scale + WIDTH / 2;
            y2d = particle.y * scale + HEIGHT / 2;
            if(x2d >= 0 && x2d <= WIDTH && y2d >= 0 && y2d <= HEIGHT) {
                c = (Math.round(y2d) * imageData.width + Math.round(x2d)) * 4;
                imageData.data[c] = 0;                // red
                imageData.data[c + 1] = 204;          // green
                imageData.data[c + 2] = 255;          // blue
                imageData.data[c + 3] = 255;          // alpha
            }
            particle.z -= 0.4;

            particle.y = HEIGHT / 14 + Math.sin(i / len * 15 + (time_elapsed / 1000)) * amplitude;
            if (particle.z < -fov)
                particle.z += 2 * fov;
        }
        ctx.putImageData(imageData, 0, 0);
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
