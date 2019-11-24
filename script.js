var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
ctx.font = "30px Arial";
var ii = 0;
let speed = 10;
let textheader = "Метод сортування: ";

function bubble() {
  console.log("bubble");
  document.getElementById("header").innerHTML = textheader + "bubble";
  bubbleSort();
  startAnimating(speed);
}

function insertion() {
  document.getElementById("header").innerHTML = textheader + "insertion";
  console.log("insertion");
  insertionSort();
  startAnimating(speed);
}

function insertion() {
  document.getElementById("header").innerHTML = textheader + "insertion";
  console.log("insertion");
  shellSort();
  startAnimating(speed);
}
function selection() {
  document.getElementById("header").innerHTML = textheader + "selection";
  console.log("selection");
  selectionSort();
  startAnimating(speed);
}


let arr = [];
let colorArr = [
  'red',
  'blue',
  'yellow',
  'green',
  'purple',
  'orange',
  'darkolivegreen',
  'darkslateblue',
  'honeydew',
  'mediumvioletred'
];
var dict = {};
for (var i = 0; i < 10; i++) {
  // arr[i] = i + 1;
}
random();

function random() {
  for (var i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 80 + 10);
    dict[arr[i]] = colorArr[i];
    // arr[i] = 0;
    console.log(arr[i]);
  }

  updatestart();

}

function updatestart() {
  ctx.clearRect(0, 0, 1000, 500);

  for (var i = 0; i < 10; i++) {

    console.log(ii);
    ctx.fillStyle = dict[arr[i]];
    ctx.fillRect(0 + i * 100, 500 - arr[i] * 5, 100, 500);
    ctx.rect(0 + i * 100, 500 - arr[i] * 5, 100, 500);
    ctx.fillStyle = 'red';
    ctx.fillText(arr[i], 0 + i * 100 + 30, 500 - arr[i] * 5 - 5);
    // ctx.stroke();
  }
}



var arr2 = new Array();

function bubbleSort() {

  let count = 0;
  for (var i = 0, endI = arr.length - 1; i < endI; i++) {
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        var swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
      arr2.push(...arr);
      console.log(arr);
    }
  }
  console.log(arr2);
}




function insertionSort() {

  let count = 0;
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      console.log(arr);
      j = j - 1;
      arr2.push(...arr);

    }
    arr[j + 1] = key;
    arr2.push(...arr);
  }
}

function shellSort() {

  const l = arr.length;
  let gap = Math.floor(l / 2);
  while (gap >= 1) {
    for (let i = gap; i < l; i++) {
      const current = arr[i];
      let j = i;
      while (j > 0 && arr[j - gap] > current) {
        arr[j] = arr[j - gap];
        console.log(arr);
        arr2.push(...arr);
        j -= gap;
      }
      arr[j] = current;
      arr2.push(...arr);
    }
    gap = Math.floor(gap / 2);
  }
  console.log(arr);
}

function selectionSort() {

  var minIdx, temp, len = arr.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
      arr2.push(...arr);

    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    arr2.push(...arr);
  }
}


function update(ii) {

  for (var i = 0; i < 10; i++) {

    console.log(ii);
    ctx.fillStyle = dict[arr2[ii + i]];
    ctx.fillRect(0 + i * 100, 500 - arr2[ii + i] * 5, 100, 500);
    ctx.rect(0 + i * 100, 500 - arr2[ii + i] * 5, 100, 500);
    ctx.fillStyle = 'red';
    ctx.fillText(arr2[ii + i], 0 + i * 100 + 30, 500 - arr2[ii + i] * 5 - 5);
    // ctx.stroke();
  }
}
var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed, then2;


function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  then2 = then + 100;
  startTime = then;
  animate();
}

function animate() {

  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    if (ii < arr2.length - 10) {

      ii += 10;
      then = now - (elapsed % fpsInterval);
      ctx.clearRect(0, 0, 1000, 500);
      update(ii);
    }

  }
}
