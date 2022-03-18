function smallestDivisor(n) {
  // if divisible by 2
  if (n % 2 == 0)
      return 2;

  // iterate from 3 to sqrt(n)
  for (var i = 3; i * i <= n; i += 2) {
      if (n % i == 0)
          return i;
  }

  return n;
}

// Driver Code



  var n = 31;
  document.write(smallestDivisor(n));