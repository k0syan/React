/**
 * Created by Shahen Kosyan on 3/27/17.
 */

export function observe(receive) {
  setInterval(() => receive([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8)
  ]), 500);
}