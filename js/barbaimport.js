/*import barba from './node_modules/@barba/core';*/
barba.use(barbaCss);
barba.init({
  transitions: [{

    // basic style
    leave(data) {
      $('p').fadeOut();
      // create your stunning leave animation here
      console.log('leave');
    },
    enter(data){
      $('p').fadeIn();
      // create your stunning leave animation here
      console.log('enter');
    }

  }]
});
