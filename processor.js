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
        console.log(self);
        self.width = self.video.videoWidth;
        self.height = self.video.videoHeight;
        self.timerCallback();
        console.log('width: ' + self.width + ' height: ' + self.height);
      },
      false
    );
  },

  computeFrame: function () {
    let c1 = document.getElementById('c1').getContext('2d');
    var canvas_width = c1.canvas.clientWidth;
    // 1236
    console.log('calc: ' + (this.height / 5) * 4);
    this.ctx1.drawImage(
      this.video,
      0,
      (this.height / 5) * 4,
      this.width,
      this.height,
      0,
      0,
      this.height / 5,
      canvas_width
    );
    return;
  },
};

window.addEventListener(
  'resize',
  function (event) {
    let c1 = document.getElementById('c1').getContext('2d');
    var canvas_width = c1.canvas.clientWidth;
    var canvas_height = c1.canvas.clientHeight;
    console.log(canvas_width, canvas_height);
  },
  true
);

document.addEventListener('DOMContentLoaded', () => {
  processor.doLoad();
});
