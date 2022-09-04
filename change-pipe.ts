import {
  fromEvent,
  interval,
  buffer,
  take,
  concatMap,
  map,
  mergeMap,
  of,
  empty,
} from 'rxjs';

export default function () {
  // interval(200).pipe(take(2)).subscribe(console.log);

  const dataTime = interval(1000);
  const click = fromEvent(document.getElementsByTagName('button'), 'click');

  // buffer可以将之前流的值缓存起来，通过事件来出发
  // (function rxbuffer() {
  //   interval(1000)
  //     .pipe(buffer(click))
  //     .subscribe((x) => console.log(x));
  // })();

  // concatMap 每次dataTime推值过来会触发里面的回调函数，如果dataTime推值频率很高，会先入栈，concatMap依次执行
  // (function rxconcatMap() {
  //   dataTime
  //     .pipe(concatMap(() => interval(1000).pipe(take(2))))
  //     .subscribe(console.log);
  // })();

  // map操作符跟JS map很像
  // (function rxMap() {
  //   dataTime.pipe(map((x) => x * 2)).subscribe(console.log);
  // })();

  // mergeMap 就是对数据进行判断，返回新的observable
  // (function rxMap() {
  //   dataTime
  //     .pipe(mergeMap((x) => (x % 2 === 0 ? of(x) : empty())))
  //     .subscribe(console.log);
  // })();
}
