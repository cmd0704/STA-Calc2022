window.onload = function(){
	try{
		const nunber = document.querySelectorAll("#PANEL td");
		for (const td of nunber){
			td.addEventListener("click", keyInput);
		}
	}
	catch(e){
		alert(e.stack);
	}
};

function keyInput(ev){
	const td = ev.target;
	const v = td.textContent;
    console.log("v:"+ v);

	let formula = document.querySelector("#siki").value;
	if (v == "="){
		calc();
	}else if (v == "BS"){
		const len = formula.length;
		if (0 < len){
			formula = formula.substring(0, len -1);
		}
	}else if (v == "C"){
		formula = "";
	}	else {
		formula += v;
	}
	document.querySelector("#siki").value = formula;
}

function calc(){
	let result;
	try{
		const s = document.querySelector("#siki").value;
        console.log(s);
		result = eval(s);
	}
	catch(e){
		result = "エラー";
	}
	document.querySelector("#kotae").value = result;
}

function checkText(){
	const s = document.querySelector("#siki").value;
	const len = s.length;
	if ((0 < len) && s[len-1] == "="){
		document.querySelector("#siki").value = s.slice(0,len-1);
		calc();
	}
}