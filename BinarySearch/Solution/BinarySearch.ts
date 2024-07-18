function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let mid: number;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target == nums[mid]) return mid;
    else if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
