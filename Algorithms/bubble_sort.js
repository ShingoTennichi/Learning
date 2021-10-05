// todo: array[1, 4, 2, 5, -2, 3]

function bubble_sort(not_sorted_array) {
    for (let i = 0; i < not_sorted_array.length; i+=1) {
        for (let i2 = 0; i2 < (not_sorted_array.length - i - 1) ; i2+=1) {
            if (not_sorted_array[i2] > not_sorted_array[i2+1]){
                let temp = not_sorted_array[i2];
                not_sorted_array[i2] = not_sorted_array[i2 + 1];
                not_sorted_array[i2 + 1] = temp;
            }
        }
    }
    console.log(not_sorted_array);
}

let not_sorted_array = [1, 4, 2, 5, -2, 3];
bubble_sort(not_sorted_array);