const moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    
   
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
           
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
  
    while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
};

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); 
