# Rest и деструктуризация

Реализуйте и экспортируйте функцию `getMax()`, которая ищет в массиве максимальное значение и возвращает его:

```js
import { getMax } from '../solutions/17-rest-operator.js';
 
// Для пустого массива возвращается null
getMax([]); // null
getMax([1, 10, 8]); // 10
```

Эта функция реализуется просто, и мы уже делали подобное ранее. Сейчас же мы учимся использовать rest-оператор. Используйте его вместе с деструктуризацией для извлечения первого элемента и всех остальных. Первый элемент становится начальным значением максимального, а остальные перебираются в цикле для определения максимального.