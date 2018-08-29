function setup() {
  console.log(
    "6.4: TensorFlow.js: Memory Management - Intelligence and Learning"
  );
}
function draw() {
  const values = [];
  for (let i = 0; i < 150000; i++) values[i] = Math.floor(random(0, 100));

  const shape = [500, 300];

  // free memory automatically
  if (true) tf.tidy(myStuff);
  else myStuff();

  function myStuff() {
    const a = tf.tensor2d(values, shape, "int32");
    const b = tf.tensor2d(values, shape, "int32");
    const b_t = b.transpose();

    const c = a.matMul(b_t);
  }

  // free memory manually
  if (false) {
    a.dispose();
    b.dispose();
    c.dispose();
    b_t.dispose();
  }

  console.log(tf.memory().numTensors);
}
