// 字典树：查询树中是否有指定的字符或字符串
class TrieNode {
  constructor() {
    this.children = new Array(26).fill(0);
    this.isEnd = false;
  }

  insert(word) {
    let node = this.children;
    for (const ch of word) {
      const index = ch.charCodeAt() - 'a'.charCodeAt();
      if (node[index] === 0) {
        node[index] = new TrieNode();
      }
      node = node[index];
    }
    node.isEnd = true;
  }

  getChildren() {
    return this.children;
  }

  isEnd() {
    return this.isEnd;
  }
}