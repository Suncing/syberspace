var a = new Array();
var b = [];

a[0]="dog"
a[1]="cat"
a[5]="tiger"

b=["dog","cat","tiger"]
console.log(a.length)
for (let i=0;i<a.length;i++){
    console.log(i+":"+a[i])
}
console.log("--------------")
for (let i in a){
    console.log(a[i]);
}