console.log("6.2: TensorFlow.js: Tensors - Intelligence and Learning");

const showTensor = t => {
  console.log(t);
  t.print();
  //console.log(t.toString()); // same as line above
};

showTensor(tf.tensor([1, 2, 3, 4]));
showTensor(tf.tensor([0, 0, 127, 255], [2, 2]));
showTensor(tf.tensor([0, 0, 127, 255, 50, 100, 150, 200], [2, 2, 2]));
showTensor(tf.tensor([0, 0, 127, 255, 50, 100, 150, 200], [2, 2, 2], "int32"));

const values = [...Array(15).keys()].map(v => Math.floor(Math.random() * 100));
showTensor(tf.tensor(values, [5, 3]));

const values2 = [...Array(30).keys()].map(v => Math.floor(Math.random() * 100));
showTensor(tf.tensor(values2, [2, 5, 3]));

showTensor(tf.scalar(4));
showTensor(tf.tensor(4));
showTensor(tf.tensor1d([1, 2, 3, 4]));

showTensor(tf.tensor3d(values2, [2, 5, 3]));
