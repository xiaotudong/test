function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var new_collection = [];
  for (var i = 0; i < collection_a.length; i++)
  {
       if (isExsite(collection_a[i],collection_b))
       {
           new_collection.push(collection_a[i]);
       }
   }
   return new_collection;
}

function isExsite(a,b) {
    for (var j = 0; j < b.value.length; j++)
    {
        if(a === b.value[j])
            return true;
    }
 }