$(document).ready(()=>{
    $('.stock-form').submit((event)=>{
        event.preventDefault()
        const symbol = $('#symbol').val()
        $('#symbol').val('')
        const symbols =symbol.split(',')
        symbols.forEach((s)=>{
            s = s.trim()
            const url = `https://api.iextrading.com/1.0/stock/${s}/quote`
            $.getJSON(url,(dataFound)=>{
                console.log(dataFound)
                let changeClass =""
                if (dataFound.change > 0){
                    changeClass = "bg-success"
                }else{
                    changeClass = "bg-danger"
                }
                $('#stock-body').prepend(`
                <tr>
                    <td>${dataFound.symbol}</td>
                    <td>${dataFound.companyName}</td>
                    <td>${dataFound.high}</td>
                    <td>${dataFound.low}</td>
                    <td class=${changeClass}>${dataFound.change}</td>
                </tr>
                `)
                $('#stock-table').DataTable()
            })
        })
    })
})
