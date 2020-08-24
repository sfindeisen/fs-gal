# fs-gal
Free to use full screen gallery for websites.
Plugin is written in jQuery.

# How to use
Include `fs-gal.css`, a recent jQuery version and `fs-gal.js` on your webpage.
Create objects (`div`, `img`, `a`, ...) with CSS class `fs-gal` and data attribute `data-url`.
The data attribute `data-url` is used to identify the image to open in the full screen gallery. Please note that this uri may not include spaces. The uri may be different from the (background) image from the `fs-gal` object.
When provided, the `title` or `alt` attribute is used to display the title of the image on the bottom of the gallery. When the `alt` attribute is provided, the value of the `title` attribute is ignored, even when the `alt` attribute is empty.
Somwhere between the body tags, include the following snippet:

```html
<div class="fs-gal-view">
    <p></p>
    <img class="fs-gal-prev fs-gal-nav" src="img/prev.svg" alt="Previous picture" title="Previous picture" />
    <img class="fs-gal-next fs-gal-nav" src="img/next.svg" alt="Next picture" title="Next picture" />
    <img class="fs-gal-close" src="img/close.svg" alt="Close gallery" title="Close gallery" />
    <img class="fs-gal-main" src="" alt="" />
</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/fs-gal.js"></script>
```
Note that these elements are hidden by the `fs-gal.css` file. Include the `fs-gal.css` file between the head tags:
```html
<link rel="stylesheet" type="text/css" href="css/fs-gal.css" />
```
# Navigation
Visitors can click on objects with the `fs-gal` CSS class to open the full screen gallery. Users can click on the previous and next icon, use the left and right arrow keys, scroll the mousewheel or swipe (on mobile devices) to navigate between images. The close button on top of the page or the `ESC` key is used to hide the gallery.