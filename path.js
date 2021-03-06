//Your code below
function buildPath(p,n){
  let path = [];
  for(let x = 0;x<n;x++){
    let r = Math.random()*10;
    Math.floor(r);
    if(r<=p){
      return path[x] = false;
    }
    else{
      return path[x] = true;
    }
  }
  path[n-1] = true;
  return path;
}

function stroll(path, index){
  for(let x = 0;x<(path.length-1);x++){
    if(index == (path.length-1)){
      return 1;
    }
    else if(index > path.length){
      return 0;
    }
    else{
      return stroll(path,index + 1);
    }

  }
}

function rsj(path,index){
  for(let x = 0;x<path.length;x++){
    if(path[index]==true){
      return 1;
    }
    else if(path[index]==false){
      return 0;
    }
    else{
      return rsj(path, index+1) + rsj(path, index+2) + rsj(path,index+5);
    }
  }
}

//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true],0));
console.log(stroll([true,true,true],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));
