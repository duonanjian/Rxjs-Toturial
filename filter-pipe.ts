import {
  from,
  interval,
  debounceTime,
  throttleTime,
  distinct
} from 'rxjs';

export default function() {
  const source = interval(1000);

  // 防抖
  (function execute() {
    source.pipe(debounceTime(500)).subscribe(console.log)
  })();

  // 节流
  (function execute() {
    source.pipe(throttleTime(3000)).subscribe(console.log)
  })();

  // 去重
  (function execute() {
    const source = from([1, 2, 3, 2, 4, 3])
    source.pipe(throttleTime(3000)).subscribe(console.log)
  })();
}
