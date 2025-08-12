// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}
Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
};

export function ProgramWindow() {
  this.screenSize = new Size(800, 600);

  this.size = new Size();

  this.position = new Position();
}

ProgramWindow.prototype.resize = function (newSize) {
  // Đảm bảo giá trị nhập vào là số
  const width = Number(newSize.width);
  const height = Number(newSize.height);

  const maxWidth = this.screenSize.width - this.position.x;
  const maxHeight = this.screenSize.height - this.position.y;

  this.size.width = Math.min(Math.max(width, 1), maxWidth);
  this.size.height = Math.min(Math.max(height, 1), maxHeight);
};


// move method
ProgramWindow.prototype.move = function(newPosition) {
  const maxX = this.screenSize.width - this.size.width;
  const maxY = this.screenSize.height - this.size.height;

  this.position.x = Math.min(Math.max(newPosition.x, 0), maxX);
  this.position.y = Math.min(Math.max(newPosition.y, 0), maxY);
};

export function changeWindow(window) {
  window.resize(new Size(400, 300));
  window.move(new Position(100, 150));
  return window;
}