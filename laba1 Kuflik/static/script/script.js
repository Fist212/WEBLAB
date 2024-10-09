
var arr;
// get() читает элементы разделенные пробелом из inputObject и добавляет их в массив arr
function get() {
    var Element = document.getElementById('inputObject');
    var inputValue = Element.value;
    return arr = inputValue.split(" ");
}
// sortArray() принимает аргумент массив элементов и сортирует его, возвращается отсортированный массив
function sortArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
    return arr;
}
// arrayOutput() выводит отсортированный массив в поле out
function arrayOutput(){
    var inputArray = get();
    var sortedArray = sortArray(inputArray);
    document.getElementById('out').value=arr.join(' ')
}
