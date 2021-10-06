function insertion_sort(not_sorted_array) {
    let sorted_array = [];
    for (let num of not_sorted_array) {
        for(let i=0; i < (sorted_array.length - 1); i+=1) {
            if (sorted_array[i] <= num) {
                sorted_array.splice((i),0,num);
                break;
            }
            else {
                sorted_array.push(num);
                break;
            }
        }
    }
    console.log(sorted_array);
}
let not_sorted_array = [1,7,5,3]
insertion_sort(not_sorted_array)