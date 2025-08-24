
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const allItems = document.querySelectorAll('.portfolio-item'); 
        
       
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        
        
        this.classList.add('active');

    
        allItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'inline-block'; 
            } else {
                item.style.display = 'none'; s
            }
        });
    });
});


const videos = document.querySelectorAll('video'); 
const iframes = document.querySelectorAll('iframe');

videos.forEach(video => {
    video.addEventListener('play', function() {
       
        videos.forEach(v => {
            if (v !== video) {
                v.pause();
            }
        });

        iframes.forEach(iframe => {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    });
});


iframes.forEach(iframe => {
    iframe.addEventListener('mouseenter', function() {
        const iframeWindow = iframe.contentWindow;

        iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*'); 


        iframes.forEach(i => {
            if (i !== iframe) {
                i.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        });
        

        videos.forEach(v => {
            v.pause();
        });
    });
});