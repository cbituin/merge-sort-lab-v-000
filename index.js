const findMinAndRemoveSorted = (arr) => {
  let minVal = arr.shift();
  return minVal;
};

const merge = (arr1, arr2) => {
  //create new Array to hold values
  let sorted = [];
  
  //iterate through the values of both arrays while they have values
  while (arr1.length !== 0 && arr2.length !== 0){
  
    //go through the previously sorted arrays to compare the next smallest value in each array
    if(arr1[0] < arr2[0]){
      
      //add the smallest value to the new array
      sorted.push(findMinAndRemoveSorted(arr1));
    }
    else {
      //add the smallest value to the new array      
      sorted.push(findMinAndRemoveSorted(arr2));
    }
  }
  
  return sorted;
};

const mergeSort = (arr) => {
  let midpoint = arr.length/2;
  let firstHalf = arr.slice(0, midpoint);
  let secondHalf = arr.slice(midpoint, arr.length);
  
  if (arr.length < 2){
    return arr;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
};