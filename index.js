function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list li');
    for (let i = 0; i < list.length; i++) {
      list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
}

function deepestChild() {
  const grand = document.getElementById('grand-node').querySelectorAll('div');
  for (let i = 0; i < grand.length; i++) {
    var foo = grand.length/2;
    if(i-1 === foo) {
      return grand[i];
    }
  }
}
