document.addEventListener('DOMContentLoaded', function () {
  const lazyVideos = [].slice.call(document.querySelectorAll('.lazy-youtube'));

  lazyVideos.forEach(video => {
    video.addEventListener('click', function () {
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


// Simulate RSS widget loading process
setTimeout(() => {
  // Replace the skeleton loader with the actual RSS widget HTML
  document.getElementById("rss-widget-placeholder").outerHTML = `
    <div>
      <rssapp-wall id="tbrgVDoPyljZlaWS"></rssapp-wall>
      <script src="https://widget.rss.app/v1/wall.js" type="text/javascript" async></script>
    </div>
  `;
}, 1000); // Replace 3000ms with your actual widget load time if needed
