// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// Constraints:
// Do not use division. - Brute Force

var nums = [1,2,3,4]
var answer = []
for(var i=0;i<nums.length;i++){
    var k = 1;
    for(var j=0;j<nums.length;j++){
        if(i!=j){
            k*=nums[j]
        }
    }
    answer.push(k)
}
console.log(answer)