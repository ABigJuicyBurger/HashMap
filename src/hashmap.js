class Hashmap {
  constructor(size = 16, loadFactor = 0.75) {
    this.hashTable = new Array(size);
    this.size = size;
    this.loadFactor = loadFactor;
  }

  loadFactor(loadNumber) {
    this.size = size;
    loadLimit = loadNumber * this.size;

    if (loadLimit > this.size) {
      return true;
    }
  }

  resize(newSize) {
    const oldHashTable = this.hashTable;
    this.hashTable = new Array(newSize);
    this.size = newSize;

    for (let bucket of oldHashTable) {
      if (bucket) {
        for (let entry of bucket) {
          this.set(entry.key, entry.value);
        }
      }
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key) % this.size;
    if (!this.hashTable[index]) {
      this.hashTable[index] = [];
    }
    const bucket = this.hashTable[index];

    let existingEntry = bucket.find((entry) => entry.key === key);
    if (existingEntry) {
      existingEntry.value = value;
    } else {
      bucket.push({ key, value });
    }

    if (this.length() / this.size > this.loadFactor) {
      this.resize(this.size * 2);
    }
  }

  get(key) {
    const index = this.hash(key) % this.size;
    const bucket = this.hashTable[index];
    if (bucket) {
      const entry = bucket.find((entry) => entry.key === key);
      return entry ? entry.value : null;
    }
    return null;
  }

  has(key) {
    const index = this.hash(key) % this.size;
    const bucket = this.hashTable[index];

    if (!bucket) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return true;
      }
    }
  }

  remove(key) {
    const index = this.hash(key) % this.size;
    const bucket = this.hashTable[index];

    if (!bucket) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
  }

  length() {
    return this.hashTable.reduce(
      (count, bucket) => count + (bucket ? bucket.length : 0),
      0
    );
  }

  clear() {
    if (this.hashTable.length > 0) {
      this.hashTable.splice(0, this.hashTable.length);
    }
    return this.hashTable;
  }

  keys() {
    return this.hashTable.flatMap((bucket) =>
      bucket ? bucket.map((entry) => entry.key) : []
    );
  }

  values() {
    return this.hashTable.flatMap((bucket) =>
      bucket ? bucket.map((entry) => entry.value) : []
    );
  }

  entries() {
    return this.hashTable.flatMap((bucket) =>
      bucket ? bucket.map((entry) => [entry.key, entry.value]) : []
    );
  }

  getCapacity() {
    return this.length() / this.size;
  }

  getDistribution() {
    const occupiedBuckets = this.hashTable.filter(
      (bucket) => bucket && bucket.length > 0
    ).length;
    return `${occupiedBuckets} / ${this.size} buckets occupied`;
  }

  logStatus() {
    console.log(`Capacity: ${this.getCapacity()}`);
    console.log(`Distribution: ${this.getDistribution()}`);
    console.log("Hash Table:", this.hashTable);
  }
}

export { Hashmap };
