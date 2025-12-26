function countSubstring(str, sub) {
  let count = 0;
  let startIndex = 0;
  
  while (true) {
    const index = str.indexOf(sub, startIndex);
    if (index === -1) {
      break;
    }
    count++;
    startIndex = index + sub.length; // move past this match to avoid overlapping
  }
  
  return count;
}
