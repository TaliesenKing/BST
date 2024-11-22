function linearSearch (arr, target) {
  for(let i = 0; i < arr.length; i++) { //loop through the array starting at index 0 and end at the last index in the array
    if (arr[i] === target) { //if the current element matches the target
     return(arr[i]); //then return the current element
    }
  }
  return -1; //if none of them match then return -1 which means its not in the array
};

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {// While high and low indices do not overlap...
      let mid = Math.floor((lo + hi) / 2);  // Find the midpoint between high and low indices
      // Compare the target value to the midpoint value
      if (arr[mid] === target) return mid;  
      // If the target equals the midpoint...
      // Return the midpoint index
      else if (arr[mid] < target) lo = mid + 1;
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      else hi = mid - 1;// If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
  }
  return -1;  // Target not found
  // Return -1 if the loop exits with overlapping pointers
}


module.exports = [linearSearch, binarySearch]