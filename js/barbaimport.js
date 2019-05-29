/*import barba from './node_modules/@barba/core';*/
// define a global hook
barba.hooks.leave((data) => {
  console.log('transition');
  // this hook will be called for each transitions
});

barba.init({
  transitions: [{

    // basic style
    leave(data) {
      // create your stunning leave animation here
      console.log('animation');
    }

  }]
});
