const a = 1;
const a1 = a;
const a2 = a1;
const a3 = a1;
const a4 = a1;
const a5 = a1;
const a6 = a1;
const a7 = a6;
const b = a5 + 1;
const b1 = b;
const b2 = b1;
const b3 = b1;
const b4 = b3;
const c = a4 + 2;
const c1 = c;
const c2 = c1;
const c3 = c2;
const user1 = a3 + 1;
const user11 = user1;
const user12 = user11;
const user13 = user11;
console.log('user 1', user1);
const user2 = user13 + a2 + b2;
const user21 = user2;
const user22 = user21;
console.log('user 2', user2);
console.log(a7, b4, c3);
console.log(user12, user22);
