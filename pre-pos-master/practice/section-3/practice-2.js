function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var remainder = [];
   for (var i = 0; i < collection_a.length; i++)
   {
       remainder[i] = Math.floor(collection_a[i].count / 3);
         if (isExsite(collection_a[i].key,object_b))
        {
            collection_a[i].count -= remainder[i];
        }
   }
   return collection_a;
}

function isExsite(a,collection_b) {
    for (var j = 0; j < collection_b.value.length; j++)
    {
        if(a === collection_b.value[j])
            return true;
    }
}

 