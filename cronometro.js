function Cronometro() {

  var init_, end_;

  this.start = function () {
    init_ = performance.now();
  }

  this.finish = function() {
    end_ = performance.now();
  }

  this.total = function() {
    return end_ - init_;
  }
}