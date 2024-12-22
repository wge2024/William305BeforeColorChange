// document.addEventListener('DOMContentLoaded', function () {
//   const lazyVideos = [].slice.call(document.querySelectorAll('.lazy-youtube'));

//   lazyVideos.forEach(video => {
//     video.addEventListener('click', function () {
//       const videoId = this.getAttribute('data-videoid');
//       const iframe = document.createElement('iframe');
//       iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`);
//       iframe.setAttribute('frameborder', '0');
//       iframe.setAttribute('allow', 'autoplay; encrypted-media');
//       iframe.setAttribute('allowfullscreen', '');

//       // Remove the button and insert the iframe
//       this.innerHTML = '';
//       this.appendChild(iframe);
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  var placeholder = document.querySelector('.rss-placeholder');
  var widget = document.querySelector('rssapp-wall');

  var checkWidgetLoaded = function() {
    if (widget && widget.offsetHeight > 0) { // Check if widget has non-zero height, indicating it's loaded
      placeholder.classList.add('d-none'); // Hide the placeholder
      widget.classList.remove('d-none'); // Show the widget
    } else {
      setTimeout(checkWidgetLoaded, 500); // Check again in 500 milliseconds if not loaded
    }
  };

  // Start checking if the widget has loaded
  setTimeout(checkWidgetLoaded, 100); // Small delay to ensure widget script might have run
});

