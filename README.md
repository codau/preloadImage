# A supersimple image preloader.

This image preloader returns the source of an image when the image is loaded on the client. The first time you set the source, the source will be returned immediately. After the first time, the result op `image.get()` will only be updated when the image is loaded on the client.
This package is designed to remove the annoying blink between images, when you change the source of a background-image in css.

## Usage

To create a preloaded image object
```
const image = new PreloadImage(src);
```

To get the image source:
```
let url = image.get();
```

To set a new source:
```
let url = image.set(src);
```


### Blaze:

```

Template.hello.created = function() {
  var src = 'foo.png';
  this.image = new PreloadImage(src);
};
```

```
Template.hello.helpers({
  imageSrc: function () {
    return Template.instance().image.get();
  }
});
```

```
Template.hello.events({
  'click button': function () {
    var src = 'bar.png';
    Template.instance().image.set(src);
  }
});
```
