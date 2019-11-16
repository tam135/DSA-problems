// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //create empty array to hold chunks(sub arrays)
    //for each element of the 'unchunked' array called 'chunked'
    //retrieve last element(array) in 'chunked'
    //IF last element does not exist, or if its length is equal to chunk size
        //push new chunk into 'chunked'
    //ELSE add current element into the chunk
    let chunked = [];
    for (let i = 1; i <= array.length; i++) {
        const last = chunked[chunked.length - 1]

        if (!last || last.length === size) {
            chunked.push([i])
        } else {
            last.push(i)
        }
    }
    return chunked;
}

module.exports = chunk;
