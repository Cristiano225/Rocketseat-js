
let family = {
	receitas:[2500, 3200, 250.43, 360.45],
	despesas:[320.34, 128.45,176.87, 1450] }
function sum(array){
	let total = 0
		
	for (let value of array){
		total += value
	}
	return total
}

function calculateBalance(){
	const calculateReceitas = sum(family.receitas)
	const calculateDespesas = sum(family.despesas)
	
	const total = calculateReceitas - calculateDespesas
	
	const itsOk = total >= 0
	
	let balanceText = " Seu saldo foi"
	if(itsOk) {
		console.log(Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}')		
	}
}

calculateBalance()
