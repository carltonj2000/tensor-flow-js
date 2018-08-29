console.log(
  "6.3: TensorFlow.js: Variables & Operations - Intelligence and Learning"
);

getRanArray = sz =>
  [...Array(sz).keys()].map(v => Math.floor(Math.random() * 100));

const values2 = getRanArray(30);
const t = tf.tensor3d(values2, [2, 5, 3], "int32");
t.data().then(d => console.log("d", d));
console.log(t.dataSync());
console.log(t.get(0, 0, 0));
console.log(t.get(1, 4, 2));

const vt = tf.variable(t);
console.log("vt", vt);

const values3 = getRanArray(30);
const t3 = tf.tensor3d(values3, [2, 5, 3], "int32");
console.log("t3", t3.dataSync());

const t4 = t3.add(t);
console.log("t4", t4.dataSync());

const t5 = t3.mul(t);
console.log("t5", t5.dataSync());

const values4 = getRanArray(15);
const values5 = getRanArray(15);
const shapeA = [5, 3];
const shapeB = [3, 5];
const a = tf.tensor2d(values4, shapeA, "int32");
const b = tf.tensor2d(values5, shapeB, "int32");
const c = a.matMul(b);
console.log("\na", a.dataSync(), "\nb", b.dataSync(), "\nc", c.dataSync());
const bb = tf.tensor2d(values5, shapeA, "int32");
const bbb = bb.transpose();
const cc = a.matMul(bbb);
console.log(
  "\na",
  a.dataSync(),
  "\nbbb",
  bbb.dataSync(),
  "\ncc",
  cc.dataSync()
);
