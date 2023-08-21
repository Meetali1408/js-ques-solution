let a= [1,2,0,0,2,2,1,1,2,0,0,1];
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            let temp =a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
console.log(a);