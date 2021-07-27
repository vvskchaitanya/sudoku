create();

function create(){
var x=[];
var N=9;
for(var i=0;i<N;i++){
    for(var j=0;j<N;j++){
        var k=getK(i,j);
        x.push({i:i,j:j,k:k,v:insertValue(i,j,k,x)});
    }
}
var t=0;
for(var c in x){
    if(x[c].i!=t){
        process.stdout.write("\n");
         t=x[c].i;
     }
 process.stdout.write(""+x[c].v+" ");
 
}
}

function insertValue(i,j,k,x){
   var avail=[1,2,3,4,5,6,7,8,9];
   for(var c in x){
       if(avail.indexOf(x[c].v)>-1 && (x[c].i==i || x[c].j==j || x[c].k==k)){
           avail.splice(avail.indexOf(x[c].v),1);
       }
   }
   if(avail.length==0)return 0;
   if(avail.length==1)return avail[0];
   else return avail[Math.floor(Math.random()*avail.length)];
}

function getK(i,j){
    if(i<=2)return parseInt(j/3);
    if(i<=5)return parseInt(j/3)+3;
    if(i<=8)return parseInt(j/3)+6;
}

