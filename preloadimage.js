PreloadImage = class PreloadImage {
  constructor(src) {
    this.url = new ReactiveVar();
    this.url.set(src);
  }

  set(src) {
    const url = this.url;

    if (Meteor.isServer || typeof url.get() !== "string") {
      url.set(src);
    }

    if (Meteor.isClient) {
      const image = new Image();

      image.onload = function() {
        url.set(src);
      };

      image.src = src;
    }
  }

  get() {
    return this.url.get();
  }
}
