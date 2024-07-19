function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const rows: number = image.length;
  const cols: number = image[0].length;

  const defaultColor: number = image[sr][sc];

  if (defaultColor === color) return image;

  function dfs(row: number, col: number): void {
    if (
      row < 0 ||
      cols < 0 ||
      row >= rows ||
      col >= cols ||
      image[row][col] !== defaultColor
    )
      return;
    image[row][col] = color;

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }
  dfs(sr, sc);

  return image;
}
