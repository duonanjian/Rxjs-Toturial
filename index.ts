import './style.css';

import { of, map, Observable } from 'rxjs';
import { cloneDeep } from 'lodash';
of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe((res) => console.log(res));

// Open the console in the bottom right to see results.
