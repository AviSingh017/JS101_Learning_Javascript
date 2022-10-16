let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
sum=0;
count=0;
for (let i=0; i<=arr.length-1;i++){
  if(i%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log(sum/count)