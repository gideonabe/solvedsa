// Token bucket algorithm

class TokenBucket {
  constructor(capacity, refillRate) {
    this.capacity = capacity; // Maximum number of tokens (bucket size)
    this.tokens = capacity;   // Start full
    this.refillRate = refillRate; // Tokens added per second
    this.lastRefill = Date.now(); // Track last refill time
  }

  // Refill the bucket based on elapsed time
  refill() {
    const now = Date.now();
    const elapsed = (now - this.lastRefill) / 1000; // seconds elapsed
    const tokensToAdd = elapsed * this.refillRate;
    
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }

  // Attempt to consume a token
  tryRemoveToken() {
    this.refill(); // update bucket before checking

    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true; // token granted
    }

    return false; // rate limit hit
  }
}

// Example
const bucket = new TokenBucket(10, 3); // 10 max tokens, 3 tokens per second

setInterval(() => {
  if (bucket.tryRemoveToken()) {
    console.log('✅ Request allowed');
  } else {
    console.log('⛔ Rate limit exceeded');
  }
}, 200);
