function count_same_elements(collection) {
  //在这里写入代码
  var new_collection = [
      {name: "a", summary: 0},
      {name:"e", summary: 0},
      {name:"h", summary: 0},
      {name:"t", summary: 0},
      {name:"f", summary: 0},
      {name:"c", summary: 0},
      {name:"g", summary: 0},
      {name:"b", summary: 0},
      {name:"d", summary: 0}];
   var count_new = counts(count_new,collection);
      for (var j = 0; j < new_collection.length; j++)
      {
          new_collection[j].summary = count_new[j];
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

function return_char(collection) {
    var string = [];
    string = collection.split("");
    var char = string[0];
    return char;
}

function return_number(collection) {
    var string = [];
    var num = '';
    var number;
    string = collection.split("");
    for (var i = 0; i < string.length; i++)
    {
        if(!isNaN(string[i]))
        num += Math.floor(string[i]);
    }
    number = Number(num);
    return number;
}
    