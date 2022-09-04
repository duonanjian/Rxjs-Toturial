import { of, Observable, from, fromEvent } from 'rxjs';

// 创造型
export default function () {
  // of 用来创造流
  // (function rxof() {
  //   of(1, 2, 3) // 创建3个数字的数据流
  //     .subscribe(
  //       (next) => console.log('next:', next), // 接收正常值
  //       (err) => console.log('error:', err), // 当有异常发生时
  //       () => console.log('the end') // 表示数据接收完毕时
  //     );
  //   of([1, 2, 3]) // 创建一个数组的数据流
  //     .subscribe((item) => console.log(item));
  // })();

  // create 写法稍有变化，现在直接是new Observable()
  // (function create() {
	// 	const observable = (observaber: any) => {
	// 		let number = 3;
	// 		observaber.next(1);
  //     observaber.next(2);
  //     const time = setInterval(() => {
  //       observaber.next(number++);
  //     }, 1000);
  //     return {
  //       unsubscribe: () => {
  //         clearInterval(time);
  //       },
  //     };
  //   }
  //   const source = new Observable(observable);
  //   // 方式一
  //   source.subscribe({
  //     next(val) {
  //       console.log('A：' + val);
  //     },
  //   }).unsubscribe();
  //   // 方式二
  //   // source.subscribe((val) => console.log('B：' + val));
  // })();

  // from 创建器的作用是将数组转换为可观察对象类型的数据流。
  // (function rxfrom() {
  //   from([10, 20, 30]) // 将数组作为值的序列发出
  //     .subscribe((item) => console.log(item)); // 输出: 10 20 30
  //   // 在新版本中from合并了fromPromise
  //   from(
  //     fetch(
  //       'https://mock.mengxuegu.com/mock/6188fda74c5d9932f7e75822/duonanjian/logout'
  //     )
  //   ).subscribe((item) => console.log(item));
  // })();

  // fromEvent创建器的作用是为DOM元素对象添加一个事件监听器，从DOM事件创建可观察对象类型的数据流。
  // (function rxfromEvent() {
  //   const click = fromEvent(document.getElementsByTagName('button'), 'click');
  //   click.subscribe((x) => console.log(x));
  // })();
}
