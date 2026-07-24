/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let newArr=[]
     for (let i=0;i<nums.length-2;i++){
        newArr.push(nums[i]+nums[i+2])
     }
     console.log(newArr)
};
rob([1,4,2])
