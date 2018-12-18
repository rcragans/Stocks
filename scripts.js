$(document).ready(()=>{
    $('.stock-form').submit((event)=>{
        event.preventDefault()
        const symbol = $('#symbol').val()
        const url = `https://api.iextrading.com/1.0/stock/${symbol}/quote`
        $.getJSON(url,(dataFound)=>{
            console.log(dataFound)
            $('#stock-body').html(`
            <tr>
                <td>${dataFound.symbol}</td>
                <td>${dataFound.companyName}</td>
                <td>${dataFound.high}</td>
                <td>${dataFound.low}</td>
                <td>${dataFound.change}</td>
            </tr>
            `)
        })
    })
})