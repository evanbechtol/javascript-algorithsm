module.exports = {
  compare: ( a, b ) => {
    return a - b;
  },

  /**
   * @description Generates a random array and fills with data up to length
   * provided
   * @param length {number} Length of array
   * @returns {[]} Returns randomly generated array
   */
  generateArray: (length) => {
    let arr = [];
    for (let i = length; i > 0; i--) {
      // Fill with random data
      arr.push(parseInt(Math.random() * 1000000000));
    }
    return arr;
  },

  /**
   * @description Generate a random number between max, and min
   * @param max {int} Integer to represent maximum value generated number can
   *   have
   * @param min {int} Integer to represent minimum value generated number can
   *   have
   * @returns {number} Returns a randomly generated number between the max and
   *   min provided
   */
  randomNumber: ( max = 100, min = 0 ) => {
    return Math.floor( ( Math.random() * max ) + min );
  },

  /**
   * @description Performs the appropriate comparison to sort the array in
   *   either ascending or descending order
   * @param sortOrder {string} If set to 'asc' will sort in ascending order,
   *   all else sorts descending
   * @param previous {*} Previous element to perform comparison with
   * @param current {*} Current element to perform comparison with
   * @returns {boolean} Returns results of the comparison to determine sorting
   */
  sortComparison: ( sortOrder, previous, current ) => {
    return sortOrder === "asc" ? previous > current : previous < current;
  }
};
