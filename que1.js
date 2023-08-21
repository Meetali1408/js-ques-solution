let a=[3,4,6,8,6,5,4,1];
for(let i=0;i<a.length/2;i++){
    let temp=a[i];
    a[i]=a[a.length-(i+1)];
    a[a.length-(i+1)]=temp;  

}
console.log(a);