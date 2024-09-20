class MazeSolver {
    do_labirint(matrix, root, visited) {
        
        if (root[0] < 0 || root[0] >= matrix.length || root[1] < 0 || root[1] >= matrix[0].length || visited[root[0]][root[1]]) {
            return;
        }

        visited[root[0]][root[1]] = true;
        console.log(`${matrix[root[0]][root[1]]} `);

        this.do_labirint(matrix, [root[0] + 1, root[1]], visited);
        this.do_labirint(matrix, [root[0] - 1, root[1]], visited);
        this.do_labirint(matrix, [root[0], root[1] - 1], visited);
        this.do_labirint(matrix, [root[0], root[1] + 1], visited);
    }
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const dfs = new MazeSolver();
const visited = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(false));

dfs.do_labirint(matrix, [0, 0], visited);
