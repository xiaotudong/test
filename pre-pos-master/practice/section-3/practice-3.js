function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var remainder = [];
  collection_a = count_same_elements(collection_a);
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

function count_same_elements(collection_a) {
  //在这里写入代码
  var new_collection = [
      {key: "a", count: 0},
      {key: "e", count: 0},
      {key: "h", count: 0},
      {key: "t", count: 0},
      {key: "f", count: 0},
      {key: "c", count: 0},
      {key: "g", count: 0},
      {key: "b", count: 0},
      {key: "d", count: 0}];
   var count_new = counts(count_new,collection_a);
      for (var j = 0; j < new_collection.length; j++)
      {
          new_collection[j].count = count_new[j];
      }
      return new_collection;
}

function counts(count,collection_a) {
    var count = [0,0,0,0,0,0,0,0,0];
  for (var i = 0; i < collection_a.length; i++)
  {
      if (collection_a[i] === 'a')
      count[0]++;
      else if (collection_a[i] === 'e')
      count[1]++;
      else if (collection_a[i] === 'h')
      count[2]++;
      else if (collection_a[i] === 't')
      count[3]++;
      else if (collection_a[i] === 'f')
      count[4]++;
      else if (collection_a[i] === 'c')
      count[5]++;
      else if (collection_a[i] === 'g')
      count[6]++;
      else if (collection_a[i] === 'b')
      count[7]++;
      else if(collection_a[i] === 'd')
      count[8]++;
  }
  return count;
}
    