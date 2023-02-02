// pageCOunt
const pageCount = (n, p) => {
     if(p===1) return 0;
     if(n==p) return 0;
     if((n-p)===1) return 1
      
     let pages = Math.floor(p / 2);
     let backPages = Math.floor((n - p) / 2);
     
     return Math.min(pages, backPages);

    
} 
module.exports = pageCount