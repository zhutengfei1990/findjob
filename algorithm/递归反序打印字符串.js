function reversePrint(s) {
  print(0, s);
}

function print(index, s) {
  if (!s || s.length <= index) {
    return;
  }
  print(index + 1, s);
  console.log(s[index]);
}

reversePrint('abc')