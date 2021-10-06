function bubble_sort(not_sorted_array) {
    for (let i = 0; i < not_sorted_array.length; i+=1) {
        // todo[remember]: The last number in the array is not needed to include because it will be compared with the number next to itself.
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

let not_sorted_array = [6,5,4,3,2,1];
bubble_sort(not_sorted_array);