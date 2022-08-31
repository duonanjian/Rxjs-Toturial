import { fromEvent, interval, buffer } from 'rxjs';

export default function () {
  const click = fromEvent(document.getElementsByTagName('button'), 'click');

  // buffer可以将之前流的值缓存起来，通过事件来出发
  (function rxbuffer() {
    interval(1000)
      .pipe(buffer(click))
      .subscribe((x) => console.log(x));
  })();
}
