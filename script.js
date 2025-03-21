const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let data = document.querySelectorAll(".price");
const getSum = () => {
//Add your code here
	let sum =0;
	for(let i=0;i<data.length;i++){
	sum=sum+Number(data[i].innerText)
	}
	let value = document.createElement("span");
	value.innerText=sum
  alert(value.innerText)
	document.body.appendChild(value)
};

getSumBtn.addEventListener("click", getSum);

