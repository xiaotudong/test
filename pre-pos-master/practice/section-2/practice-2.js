function count_same_elements(collection) {
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
   var count_new = counts(count_new,collection);
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
        var a = 1;
        if (collection_a[i].length != 1)
        {
            a = return_number(collection_a[i]);
            collection_a[i] = return_char(collection_a[i]);
        }
        if (collection_a[i] === 'a')
        count[0] +=a;
        else if (collection_a[i] === 'e')
        count[1] +=a;
        else if (collection_a[i] === 'h')
        count[2] +=a;
        else if (collection_a[i] === 't')
        count[3] +=a;
        else if (collection_a[i] === 'f')
        count[4] +=a;
        else if (collection_a[i] === 'c')
        count[5] +=a;
        else if (collection_a[i] === 'g')
        count[6] +=a;
        else if (collection_a[i] === 'b')
        count[7] +=a;
        else if(collection_a[i] === 'd')
        count[8] +=a;
      
  }
  return count;
}

function return_number(collection) {
    var string = [];
    string = collection.split("-");
    var number = Math.floor(string[1]);
    return number;
}

function return_char(collection) {
    var string = [];
    string = collection.split("-");
    var char = string[0];
    return char;
}
    