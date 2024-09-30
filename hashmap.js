if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}

class Hashmap {
  constructor(size) {
    this.hashTable = new Array(size);
    this.size = size;
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
    const index = this.hash(key);
    const bucket = this.hashTable[index];

    if (bucket) {
      let existingKey = bucket.get((node) => node.key === key);
      if (existingKey) {
        existingKey.value = value;
      } else {
        bucket.push({ key, value });
      }
    }
  }

  get(key) {
    const index = this.hash(key) % this.size;
    const bucket = this.hashTable[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket[i].value;
      }
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
    let count = 0;

    for (let i = 0; i < this.hashTable.length; i++) {
      if (this.hashTable[i]) {
        count++;
      }
    }
    return count;
  }

  clear() {
    if (this.hashTable.length > 0) {
      this.hashTable.splice(0, this.hashTable.length);
    }
    return this.hashTable;
  }

  keys() {
    let keysArray = [];
    const index = this.hash(key);
    const bucket = this.hashTable[index];

    for (let i = 0; i < bucket.length; i++) {
      if (this.bucket[i]) {
        keysArray.push(this.bucket[i].key);
      }
    }
    return keysArray;
  }

  values() {
    let valuesArray = [];
    const index = this.hash(key);
    const bucket = this.hashTable[index];

    for (let i = 0; i < bucket.length; i++) {
      if (this.bucket[i]) {
        valuesArray.push(this.bucket[i].value);
      }
    }
    return valuesArray;
  }

  entries() {
    let entriesArray = [];
    const index = this.hash(key);
    const bucket = this.hashTable[index];

    for (let i = 0; i < bucket.length; i++) {
      if (this.bucket[i]) {
        entriesArray.push(this.bucket[i].key + this.bucket[i].value);
      }
    }
    return entriesArray;
  }
}
