function exportToExcel(tableId){
	let tableData = document.getElementById(tableId).outerHTML;
	tableData = tableData.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tableData = tableData.replace(/<input[^>]*>|<\/input>/gi, ""); //remove input params
	tableData = tableData + '<br /><br /> REPORTE DE NOTAS DEL APP'+
                            '<br />DIA:  '  +getFecha() +
                            '<br />HORA: ' + getFecha2()
    
    

	let a = document.createElement('a');
	a.href = `data:application/vnd.ms-excel, ${encodeURIComponent(tableData)}`
	a.download = 'Reporte_Notas_' + getFecha() + '.xls'
	a.click()
}
function getFecha() {
	let dateObj = new Date()
    let dateTime = `${dateObj.getUTCDate()}_${dateObj.getMonth()+1}_${dateObj.getFullYear()}`
    return dateTime	
}

function getFecha2() {
	let dateObj = new Date()
    let mes = ` ${dateObj.getMonth()+1}`
	let dateTime2 = `${dateObj.getHours()} : ${dateObj.getMinutes()} ${dateObj.getSeconds()}`
    return dateTime2
}
