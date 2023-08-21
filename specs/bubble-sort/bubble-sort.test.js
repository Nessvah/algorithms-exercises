/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end

  To run the tests, change the `test.skip(…)` below to `test(…)`

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // we know that we are going to do at least one iteration so we can use a do while loop
  // we also need to set a flag for tracking swaps
  let swapped;

  // optimization, set a counter for each iteration and remove that to the outer loop
  // the sorted numbers are pushed to the end so for each iteration that we do, we
  // know for sure that those lasts are sorted and we don't need to compare them again
  let iterations = 0;

  do {
    // at the beginning of each loop we can start by assuming that is everything sorted
    swapped = false;

    // now we need an inner loop to compare the numbers next to each other
    for (let i = 0; i < nums.length - iterations; i++) {
      if (nums[i] > nums[i + 1]) {
        const largest = nums[i];
        // swap the values
        nums[i] = nums[i + 1];
        nums[i + 1] = largest;

        // set flag that his was swapped
        swapped = true;
      }
    }
    // increment iterations at the end of the inner loop
    iterations++;
  } while (swapped);

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
