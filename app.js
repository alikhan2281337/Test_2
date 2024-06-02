let limit = 50
document.getElementById('allSymbolsCounter').innerText = "0 / " + limit
document.getElementById('limitedIdInput').addEventListener('input', function(){

    let currentSymbols = this.value.length
    
    if (currentSymbols > limit){
        this.value = this.value.substring(0, limit);
        currentSymbols = limit
    }
    document.getElementById('allSymbolsCounter').innerText = currentSymbols + " / " + limit
})