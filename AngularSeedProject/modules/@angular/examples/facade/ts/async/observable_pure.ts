/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// #docregion Observable
import {Observable, Subscriber} from 'rxjs/Rx';
import {map} from 'rxjs/operator/map';

var obs = new Observable<number>((sub: Subscriber<number>) => {
  var i = 0;
  setInterval(() => sub.next(++i), 1000);
});
map.call(obs, (i: number) => `${i} seconds elapsed`).subscribe((msg: string) => console.log(msg));
// #enddocregion
