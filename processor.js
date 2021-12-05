let processor = {
  timerCallback: function () {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    let self = this;
    setTimeout(function () {
      self.timerCallback();
    }, 0);
  },

  doLoad: function () {
    this.video = document.getElementById('video');
    this.c1 = document.getElementById('c1');
    this.ctx1 = this.c1.getContext('2d');
    let self = this;

    this.video.addEventListener(
      'playing',
      function () {
        self.width = self.video.videoWidth;
        self.height = self.video.videoHeight;
        self.timerCallback();
        console.log('width: ' + self.width + ' height: ' + self.height);
      },
      false
    );
  },

  computeFrame: function () {
    this.ctx1.drawImage(
      this.video,
      0,
      0,
      this.width * 3,
      this.height * 3,
      0,
      0,
      this.width,
      this.height
    );
    return;
  },
};

document.addEventListener('DOMContentLoaded', () => {
  processor.doLoad();
});
