 function count_same_elements(collection) {
    var re = [];
  for(var i=0,v,l = collection.length; v = collection[i],i<l; i++)
  {
    //匹配数组中的字符串，匹配，返回字符串，否则，返回null
    var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
    if (!re[rv[1]])
        re[rv[1]] = 0;
    /*
    parseInt(string,radix)解析一个字符串，并返回一个数字
    string为被解析的字符串，radix表示要解析的数字的基数,即几进制数。该值介于 2 ~ 36 之间。
    如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
    如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。  
    */
    re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
  }
  return re;
}
 
 