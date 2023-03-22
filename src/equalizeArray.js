const equalizeArray = (arr) => {
 if( arr.length === 0 ) return 0;
 const results = arr.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
 let max = results[0];
 for(let i=1; i< results.length; i++){
    if(results[i].count > max.count){
      max  = results[i];
    }
 }
 
 return arr.length - max.count;
}
console.log(equalizeArray([1,2,2,3]));