function isPalindrome(s: string): boolean {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left: number = 0;
  let right: number = s.length - 1;
  //let counter: number = 0;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
