function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  return dfs(root, p, q);
}

function dfs(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root == null || p == null || q == null) return root;
  if (p.val > root.val && q.val > root.val) return dfs(root.right, p, q);
  else if (p.val < root.val && q.val < root.val) return dfs(root.left, p, q);
  return root;
}
