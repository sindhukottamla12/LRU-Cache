LRU Cache Implementation
Overview
This repository contains an implementation of an LRU (Least Recently Used) Cache. The LRU Cache is a type of data structure that removes the least recently used items when the cache reaches its capacity. It’s often used to optimize systems where storage is limited, and frequently accessed data needs to be kept readily available.

Features
Efficient Cache Management: The cache stores key-value pairs and automatically evicts the least recently used items when the cache exceeds its capacity.

O(1) Time Complexity: Both insertions and lookups are done in constant time.

Eviction Strategy: Least recently used items are evicted to free space for newer entries.

Data Structures Used
Doubly Linked List: Keeps track of the order of usage of cache items.

Hash Map: Provides quick access to the cache items and their respective nodes in the doubly linked list.
