onmessage = (ev) => {
  if (ev.data === "start") {
    let sum = 0;
    console.log("calculating.....");
    for (let index = 0; index < 5000000000; index++) {
      sum += index;
    }
    console.log("done.");

    postMessage(42);
  }
  //   console.log(ev);
};
