class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBalanced(root) {
    // Base case: an empty tree is balanced by definition
    if (!root) {
      return true;
    }
  
    // Get the height of the left and right subtree
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
  
    // If the difference in height is greater than 1, the tree is not balanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
  
    // Recursively check if the left and right subtree are also balanced
    return isBalanced(root.left) && isBalanced(root.right);
  }
  
  function getHeight(node) {
    // Base case: an empty node has height 0
    if (!node) {
      return 0;
    }
  
    // Recursively get the height of the left and right subtree
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
  
    // Return the height of the node as 1 plus the maximum height of its children
    return 1 + Math.max(leftHeight, rightHeight);
  }
  

let tree = new TreeNode(100);
tree.left =  new TreeNode(50);
tree.right =  new TreeNode(110);
tree.left.left =  new TreeNode(20);
tree.left.right =  new TreeNode(60);
tree.right.left =  new TreeNode(90);
tree.right.right =  new TreeNode(120) 
tree.left.left.left =  new TreeNode(500);
tree.left.left.left.left =  new TreeNode(580);


console.log(isBalanced(tree))