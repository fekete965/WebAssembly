// C Prime number checker
int isPrime(int num) {
  for (int i = 2; i < num; i++)
    if (num % i == 0) return 0;
  return (num != 1 & num != 0) ? 1 : 0;
}

// Check number 0 - {primes}
int checkPrimes(num) {
  int count = 0;
  for(int i = 0; i < num; i += 1) {
    if (isPrime(i)) count += 1;
  }
  return count;
}