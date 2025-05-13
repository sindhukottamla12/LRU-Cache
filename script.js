class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _addNode(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  _removeNode(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  get(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      this._removeNode(node);
      this._addNode(node);
      this.render();
      alert(`Value: ${node.value}`);
      return node.value;
    }
    alert("Key not found!");
    return "Not Found";
  }

  put(key, value) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      node.value = value;
      this._removeNode(node);
      this._addNode(node);
    } else {
      let newNode = new Node(key, value);
      if (this.cache.size >= this.capacity) {
        let lru = this.tail.prev;
        this._removeNode(lru);
        this.cache.delete(lru.key);
      }
      this._addNode(newNode);
      this.cache.set(key, newNode);
    }
    this.render();
  }

  render() {
    const container = document.getElementById("cacheContainer");
    container.innerHTML = "";
    let current = this.head.next;
    while (current !== this.tail) {
      const block = document.createElement("div");
      block.className = "cache-item recent";
      block.innerText = `${current.key}:${current.value}`;
      container.appendChild(block);
      current = current.next;
    }
  }
}

let cache = new LRUCache();

function initializeCache() {
  const capacity = parseInt(document.getElementById("capacity").value);
  cache = new LRUCache(capacity);
  alert(`Initialized cache capacity as ${capacity}`);
}

function insertIntoCache() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;
  if (!key || !value) return;
  cache.put(key, value);
  document.getElementById("key").value = "";
  document.getElementById("value").value = "";
}

function getValue() {
  const key = document.getElementById("key").value;
  if (!key) return;
  cache.get(key);
}