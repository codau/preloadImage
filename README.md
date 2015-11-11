# A supersimple image preloader.

This image preloader returns the source of an image when the image is loaded on the client. The first time you set the source, the source will be returned immediately. After the first time, the will only be updated when the image is loaded on the client.
This package is designed to remove the annoying blink between images, when you change the source of a background-image.

## Usage

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
