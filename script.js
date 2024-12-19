document.addEventListener('DOMContentLoaded', function() {
    const lazyVideos = [].slice.call(document.querySelectorAll('.lazy-youtube'));
  
    lazyVideos.forEach(video => {
      video.addEventListener('click', function() {
        const videoId = this.getAttribute('data-videoid');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.setAttribute('allowfullscreen', '');
  
        // Remove the button and insert the iframe
        this.innerHTML = '';
        this.appendChild(iframe);
      });
    });
  });