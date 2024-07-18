function isAnagram(s: string, t: string): boolean {
  s = s.split("").sort().toString();
  t = t.split("").sort().toString();

  if (s !== t) return false;

  return true;
}
