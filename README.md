# A supersimple image preloader.

This image preloader returns the source of an image when the image is loaded on the client.
This package is designed to remove the annoying blink between images, when you change the source of a background-image.

## Usage

### Blaze:

```
Template.hello.created = function() {
  this.image = new PreloadImage('source');
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
    Template.instance().image.set(`new source`);
  }
});
```
