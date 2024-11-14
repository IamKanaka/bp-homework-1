

//1
function MergeArray(array1, array2){
    return array1.concat(array2);
}

console.log("MergeArray [1,2,3],[4,5,6]: ", MergeArray([1,2,3],[4,5,6]));

//2
function _filter(array){
    return array.filter((value) => value >= 30);
}

console.log("Filter [10,20,30,40,50]: ", _filter([10,20,30,40,50]));

//3
const myarray = [5,6,7,2,4];
function RemoveIndex(index){
    myarray.splice(index,1);
    return myarray;
}
console.log("RemoveIndex (2): ", RemoveIndex(2));


//4
function RomanToNumber(roman){
    let OverSum = 0;
    const romanNumber = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    }
    OverSum = romanNumber[roman[roman.length-1]];
    for(let i=roman.length-1;i> 0;i--){
        if(romanNumber[roman[i]] <= romanNumber[roman[i-1]]){
            OverSum += romanNumber[roman[i-1]];
        }
        else{
            OverSum -= romanNumber[roman[i-1]];
        }
        
    }
    return OverSum;
}

console.log("RomanNumber (XIV): ", RomanToNumber("XIV"));

//5
function RemoveAndSort(array){
    let NewArray = [];
    for(let i=0;i<array.length;i++){
        if(NewArray.indexOf(array[i]) == -1){
            NewArray.push(array[i]);
        }
    }
    NewArray.sort();
    return NewArray;
}

console.log("RemoveAndSort[1,2,1,4,5,2,3,4,1,4]:", RemoveAndSort([1,2,1,4,5,2,3,4,1,4]));


//6
let ForMove_Array = [1,2,3,4,5];
function MoveArray(number){
    number = number-1;
    let Moved_Array = [];
    for(let i=0;i<ForMove_Array.length;i++){
        if(i+number >= ForMove_Array.length){
            Moved_Array[i] = ForMove_Array[(i+number)-ForMove_Array.length];
        }
        else{
            Moved_Array[i] = ForMove_Array[i+number];
        }
    }
    return Moved_Array;
}

console.log("MoveArray (2): ",MoveArray(2));