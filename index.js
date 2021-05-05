function outer() {

  function cb(b) {
    console.log(b);
  }

  function inner(a){
    setTimeout(() => cb(a), a*1000);
  }
  
  for(var i=1; i<=5; i++) {
    inner(i);
  }

  console.log("I run first")
}

outer();