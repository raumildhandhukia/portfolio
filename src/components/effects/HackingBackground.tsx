"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AlgorithmCode {
  id: string;
  text: string;
  x: number;
  y: number;
  type: 'sorting' | 'searching' | 'tree' | 'graph' | 'dp' | 'array';
  category: string;
}
// DSA Algorithm snippets in Python
const dsaAlgorithms = [
  // Sorting Algorithms
  { code: "def bubble_sort(arr):", type: "sorting", category: "# O(n²) Bubble Sort" },
  { code: "    for i in range(len(arr)):", type: "sorting", category: "# Nested loops" },
  { code: "        for j in range(len(arr)-i-1):", type: "sorting", category: "# Compare adjacent" },
  { code: "            if arr[j] > arr[j+1]:", type: "sorting", category: "# Swap condition" },
  { code: "                arr[j], arr[j+1] = arr[j+1], arr[j]", type: "sorting", category: "# Python swap" },
  
  { code: "def quick_sort(arr):", type: "sorting", category: "# O(n log n) Quick Sort" },
  { code: "    if len(arr) <= 1: return arr", type: "sorting", category: "# Base case" },
  { code: "    pivot = arr[len(arr)//2]", type: "sorting", category: "# Choose pivot" },
  { code: "    left = [x for x in arr if x < pivot]", type: "sorting", category: "# List comprehension" },
  { code: "    return quick_sort(left) + [pivot] + quick_sort(right)", type: "sorting", category: "# Recursive combine" },
  
  { code: "def merge_sort(arr):", type: "sorting", category: "# O(n log n) Merge Sort" },
  { code: "    if len(arr) <= 1: return arr", type: "sorting", category: "# Base case" },
  { code: "    mid = len(arr) // 2", type: "sorting", category: "# Find middle" },
  { code: "    return merge(merge_sort(arr[:mid]), merge_sort(arr[mid:]))", type: "sorting", category: "# Divide & conquer" },
  
  // Searching Algorithms
  { code: "def binary_search(arr, target):", type: "searching", category: "# O(log n) Binary Search" },
  { code: "    left, right = 0, len(arr) - 1", type: "searching", category: "# Two pointers" },
  { code: "    while left <= right:", type: "searching", category: "# Search space" },
  { code: "        mid = (left + right) // 2", type: "searching", category: "# Middle element" },
  { code: "        if arr[mid] == target: return mid", type: "searching", category: "# Found target" },
  
  { code: "def linear_search(arr, target):", type: "searching", category: "# O(n) Linear Search" },
  { code: "    for i, val in enumerate(arr):", type: "searching", category: "# Iterate with index" },
  { code: "        if val == target: return i", type: "searching", category: "# Check each element" },
  { code: "    return -1", type: "searching", category: "# Not found" },
  
  // Tree Algorithms
  { code: "def inorder_traversal(root):", type: "tree", category: "# DFS Inorder" },
  { code: "    if not root: return []", type: "tree", category: "# Base case" },
  { code: "    return inorder(root.left) + [root.val] + inorder(root.right)", type: "tree", category: "# Left-Root-Right" },
  
  { code: "def level_order(root):", type: "tree", category: "# BFS Level Order" },
  { code: "    if not root: return []", type: "tree", category: "# Empty tree" },
  { code: "    queue, result = [root], []", type: "tree", category: "# Queue for BFS" },
  { code: "    while queue:", type: "tree", category: "# Process level by level" },
  { code: "        node = queue.pop(0)", type: "tree", category: "# Dequeue node" },
  
  { code: "def max_depth(root):", type: "tree", category: "# Tree Depth/Height" },
  { code: "    if not root: return 0", type: "tree", category: "# Null node" },
  { code: "    return 1 + max(max_depth(root.left), max_depth(root.right))", type: "tree", category: "# Recursive depth" },
  
  // Graph Algorithms
  { code: "def dfs(graph, start, visited=set()):", type: "graph", category: "# Depth-First Search" },
  { code: "    visited.add(start)", type: "graph", category: "# Mark visited" },
  { code: "    for neighbor in graph[start]:", type: "graph", category: "# Check neighbors" },
  { code: "        if neighbor not in visited:", type: "graph", category: "# Unvisited check" },
  { code: "            dfs(graph, neighbor, visited)", type: "graph", category: "# Recursive DFS" },
  
  { code: "def bfs(graph, start):", type: "graph", category: "# Breadth-First Search" },
  { code: "    visited, queue = set(), [start]", type: "graph", category: "# Initialize BFS" },
  { code: "    while queue:", type: "graph", category: "# Process queue" },
  { code: "        node = queue.pop(0)", type: "graph", category: "# Dequeue node" },
  { code: "        if node not in visited:", type: "graph", category: "# Check if new" },
  
  { code: "def dijkstra(graph, start):", type: "graph", category: "# Shortest Path" },
  { code: "    distances = {node: float('inf') for node in graph}", type: "graph", category: "# Initialize distances" },
  { code: "    distances[start] = 0", type: "graph", category: "# Start distance" },
  { code: "    pq = [(0, start)]", type: "graph", category: "# Priority queue" },
  
  // Dynamic Programming
  { code: "def fibonacci(n, memo={}):", type: "dp", category: "# DP Memoization" },
  { code: "    if n in memo: return memo[n]", type: "dp", category: "# Check cache" },
  { code: "    if n <= 1: return n", type: "dp", category: "# Base cases" },
  { code: "    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)", type: "dp", category: "# Store result" },
  { code: "    return memo[n]", type: "dp", category: "# Return cached" },
  
  { code: "def longest_common_subsequence(s1, s2):", type: "dp", category: "# LCS Algorithm" },
  { code: "    dp = [[0] * (len(s2)+1) for _ in range(len(s1)+1)]", type: "dp", category: "# 2D DP table" },
  { code: "    for i in range(1, len(s1)+1):", type: "dp", category: "# Fill DP table" },
  { code: "        for j in range(1, len(s2)+1):", type: "dp", category: "# Character by character" },
  
  { code: "def coin_change(coins, amount):", type: "dp", category: "# Coin Change DP" },
  { code: "    dp = [float('inf')] * (amount + 1)", type: "dp", category: "# Initialize DP" },
  { code: "    dp[0] = 0", type: "dp", category: "# Base case" },
  { code: "    for coin in coins:", type: "dp", category: "# For each coin" },
  { code: "        for i in range(coin, amount + 1):", type: "dp", category: "# Update amounts" },
  
  // Array Algorithms
  { code: "def two_sum(nums, target):", type: "array", category: "# Two Sum Problem" },
  { code: "    seen = {}", type: "array", category: "# Hash map" },
  { code: "    for i, num in enumerate(nums):", type: "array", category: "# Iterate array" },
  { code: "        complement = target - num", type: "array", category: "# Find complement" },
  { code: "        if complement in seen: return [seen[complement], i]", type: "array", category: "# Check if exists" },
  
  { code: "def max_subarray(nums):", type: "array", category: "# Kadane's Algorithm" },
  { code: "    max_sum = current_sum = nums[0]", type: "array", category: "# Initialize sums" },
  { code: "    for num in nums[1:]:", type: "array", category: "# Start from second" },
  { code: "        current_sum = max(num, current_sum + num)", type: "array", category: "# Reset or continue" },
  { code: "        max_sum = max(max_sum, current_sum)", type: "array", category: "# Update maximum" },
  
  { code: "def rotate_array(nums, k):", type: "array", category: "# Array Rotation" },
  { code: "    k %= len(nums)", type: "array", category: "# Handle k > len" },
  { code: "    nums[:] = nums[-k:] + nums[:-k]", type: "array", category: "# Python slicing" },
];

const HackingBackground = () => {
  const [algorithmCodes, setAlgorithmCodes] = useState<AlgorithmCode[]>([]);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });

  

  // Get window dimensions safely
  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    let codeIndex = 0;
    
    const spawnMultipleCodes = () => {
      // Spawn 2-4 codes at once for more activity
      const numCodes = Math.floor(Math.random() * 3) + 2; // 2-4 codes
      
      for (let i = 0; i < numCodes; i++) {
        setTimeout(() => {
          const algorithm = dsaAlgorithms[codeIndex % dsaAlgorithms.length];
          const code: AlgorithmCode = {
            id: Math.random().toString(36).substr(2, 9),
            text: algorithm.code,
            // Use more of the screen width, but leave margins
            x: Math.random() * (windowDimensions.width - 500) + 50,
            // Use full section height more effectively
            y: Math.random() * Math.max(windowDimensions.height - 200, 600) + 100,
            type: algorithm.type as 'sorting' | 'searching' | 'tree' | 'graph' | 'dp' | 'array',
            category: algorithm.category,
          };
          
          setAlgorithmCodes(prev => {
            const newCodes = [...prev, code];
            return newCodes.length > 25 ? newCodes.slice(-25) : newCodes; // Keep max 25 codes
          });
          
          // Remove code after 6-8 seconds (longer for reading code)
          const duration = Math.random() * 2000 + 6000; // 6-8 seconds
          setTimeout(() => {
            setAlgorithmCodes(prev => prev.filter(c => c.id !== code.id));
          }, duration);
          
          codeIndex++;
        }, i * 300); // Stagger spawning by 300ms for better readability
      }
    };

    // Only start spawning if we have window dimensions
    if (windowDimensions.width > 0) {
      const interval = setInterval(spawnMultipleCodes, 1500); // Spawn every 1.5 seconds
      spawnMultipleCodes(); // Initial spawn burst
      
      return () => clearInterval(interval);
    }
  }, [windowDimensions]); // Depend on windowDimensions

  const getCodeColor = (type: string) => {
    switch (type) {
      case 'sorting': return '#ff6b6b';     // Red for sorting algorithms
      case 'searching': return '#4ecdc4';   // Teal for searching algorithms
      case 'tree': return '#45b7d1';        // Blue for tree algorithms
      case 'graph': return '#96ceb4';       // Green for graph algorithms
      case 'dp': return '#ffeaa7';          // Yellow for dynamic programming
      case 'array': return '#dda0dd';       // Purple for array algorithms
      default: return '#00bfff';
    }
  };

  const getPythonSyntaxColor = (text: string, algorithmType: string) => {
    // Python syntax highlighting
    if (text.includes('def ') || text.includes('class ')) return '#ff79c6'; // Pink for keywords
    if (text.includes('if ') || text.includes('for ') || text.includes('while ') || text.includes('return ')) return '#8be9fd'; // Cyan for control flow
    if (text.includes('#')) return '#6272a4'; // Gray for comments
    if (text.includes('range(') || text.includes('len(') || text.includes('max(') || text.includes('min(')) return '#50fa7b'; // Green for built-ins
    return getCodeColor(algorithmType); // Default algorithm type color
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
      {/* Subtle Grid Background */}
      {/* <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      /> */}

      {/* Randomly Spawning Algorithm Codes */}
      {algorithmCodes.map((code, index) => (
        <motion.div
          key={code.id}
          initial={{ 
            opacity: 0, 
            scale: 0.3,
            x: code.x,
            y: code.y,
            rotate: Math.random() * 6 - 3, // Smaller rotation for code readability
          }}
          animate={{ 
            opacity: [0, 0.9, 0.9, 0.7, 0],
            scale: [0.3, 1.05, 1, 1, 0.9],
            rotate: [
              Math.random() * 6 - 3,
              Math.random() * 3 - 1.5,
              Math.random() * 2 - 1
            ],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            delay: index * 0.05, // Smaller stagger for smoother flow
          }}
          className="absolute text-xs font-mono bg-gray-900 bg-opacity-80 px-4 py-2 border border-opacity-70 rounded-md shadow-xl"
          style={{ 
            color: getPythonSyntaxColor(code.text, code.type),
            borderColor: getCodeColor(code.type),
            boxShadow: `0 0 15px ${getCodeColor(code.type)}40, inset 0 0 6px ${getCodeColor(code.type)}15`,
            textShadow: `0 0 3px ${getPythonSyntaxColor(code.text, code.type)}`,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
            minWidth: '200px',
            maxWidth: '400px',
          }}
        >
          {/* Algorithm Category */}
          <div 
            className="text-xs opacity-60 mb-1"
            style={{ color: getCodeColor(code.type) }}
          >
            {code.category}
          </div>
          
          {/* Python Code */}
          <div className="font-medium leading-relaxed">
            {code.text}
          </div>
          
          {/* Algorithm Type Badge */}
          <div 
            className="absolute -top-1 -right-1 text-xs px-1.5 py-0.5 rounded-full border"
            style={{ 
              backgroundColor: getCodeColor(code.type),
              color: '#000',
              fontSize: '10px',
              fontWeight: 'bold',
            }}
          >
            {code.type.toUpperCase()}
          </div>
        </motion.div>
      ))}

      {/* Subtle Scanning Line */}
      {/* <motion.div
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"
        animate={{
          y: [0, windowDimensions.height],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          boxShadow: '0 0 8px #00ff00',
        }}
      /> */}

      {/* Very Subtle Glitch Effect
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0, 0, 0.03, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 6,
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
        }}
      /> */}
    </div>
  );
};

export default HackingBackground;
