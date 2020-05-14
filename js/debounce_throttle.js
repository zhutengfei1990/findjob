// 合并事件，触发最后一次事件
function debounce(fn, delay) {
  
  let timer = null;

  return function() {
    const args = arguments;
    if (timer) {
      clearTimeout(timer)
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const f = () => {
  console.log(1);
}

const ff = debounce(f, 2000);

ff();

function throttle(fn,delay) {
  let prv = Date.now();
  return function() {
    let now = Date.now();
    let diff = now - prv - delay;
    if (diff >= 0) {
      prv = now;
      setTimeout(() => {
        fn.apply(this);
      }, delay);
    }
  };
}