const set = new Set([1,2,3,4,4,3,2,1]);
set.add(5);
set.add(3); // 추가 안 됨
set.delete(1); // 1이 다 지워짐, 로그를 찍으면 boolean 값이 리턴된다
set.has(1);
set.has(2);
console.log(set.has(1));
console.log(set.has(2));
console.log(set.size);
console.log(Array.from(set));
console.log(new Set(set));

console.log(set);
