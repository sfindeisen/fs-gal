# fs-gal
Free to use full screen gallery for websites.
Plugin is written in jQuery.

# How to use
Include fs-gal.css, a recent jQuery and jQuery Mobile version and fs-gal.js on your webpage.
Create objects (div, img, a, ...) with class 'fs-gal' and data-attribute 'data-url'.
The data-attribute 'data-url' is used to identify the image to open in the full screen gallery whend clicked. Please note that this uri may not include spaces.
When provided, the title attribute is used to display the title of the image on the bottom of the gallery.
Somwhere between the body tags, include the following snippet:
```html
<div class="fs-gal-view">
  <h1></h1>
  <img class="fs-gal-prev fs-gal-nav" src="img/prev.svg" alt="Previous picture" title="Previous picture" />
  <img class="fs-gal-next fs-gal-nav" src="img/next.svg" alt="Next picture" title="Next picture" />
  <img class="fs-gal-close" src="img/close.svg" alt="Close gallery" title="Close gallery" />
</div>
```

# Navigation
Visitors can click on objects with the fs-gal class to open the full screen gallery. Users can click on the previous and next icon or use the left and right arrow keys to navigate between images. Swiping left and right is also supported. The close button on top of the page or the ESC key is used to close the gallery.