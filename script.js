function appendOperation(operation){
    document.getElementById('Ergebnisbereich').innerHTML += operation;
}
function calculateResult() {
    let container = document.getElementById('Ergebnisbereich');
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}
function deleteLast() {
    let container = document.getElementById('Ergebnisbereich');
    if(container.innerHTML.endsWith(' ')){
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}
function deleteAll() {
    let container = document.getElementById('Ergebnisbereich');
    container.innerHTML = container.innerHTML.slice(0, 0);
}
