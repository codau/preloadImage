preloadImage = class {
  constructor(src) {
    this.url = new ReactiveVar();
    this.url.set(src);
  }

  set(src) {
    const url = this.url;

    if (Meteor.isServer) {
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
