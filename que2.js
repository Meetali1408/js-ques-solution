let a=[1,3,5,7,2,9,1,5];
let b={};
for(let i=0;i<a.length;i++){
    if(a[i] in b){
        b[a[i]]=b[a[i]]+1;
    }
    else{
        b[a[i]]=1;
    }
}
console.log(b);