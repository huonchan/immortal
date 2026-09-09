
const formatLine = (name, num , p ) => `${name},排出 : ${num} , 確率 : ${p}`;
const formatEmpty = "empty.";
/* 加工 */
let blackArray = {};
if (blackData.trim().length > 0) {
	blackArray = blackData
  .trim()
  .split('\n')
  .map(line => {
    const [name, value] = line.split(',');
    return {
      name: name.trim(),
      value: Number(value.trim())
    };
  });
}

let goldArray = {};
if (goldData.trim().length > 0) {
	goldArray = goldData
  .trim()
  .split('\n')
  .map(line => {
    const [name, value] = line.split(',');
    return {
      name: name.trim(),
      value: Number(value.trim())
    };
  });
}

let redArray = {};
if (redData.trim().length > 0) {
	redArray = redData
	.trim()
	.split('\n')
	.map(line => {
	const [name, value] = line.split(',');
		return {
		name: name.trim(),
		value: Number(value.trim())
		};
	});
}

let blueArray = {};
if (blueData.trim().length > 0) {
	blueArray = blueData
  .trim()
  .split('\n')
  .map(line => {
    const [name, value] = line.split(',');
    return {
      name: name.trim(),
      value: Number(value.trim())
    };
  });
}

let grayArray = {};
if (grayData.trim().length > 0) {
	grayArray = grayData
  .trim()
  .split('\n')
  .map(line => {
    const [name, value] = line.split(',');
    return {
      name: name.trim(),
      value: Number(value.trim())
    };
  });
}

/* 排出率 */

// 合計値 
const blackSum = blackArray.reduce((sum, item) => sum + item.value, 0);
const goldSum = goldArray.reduce((sum, item) => sum + item.value, 0);
const redSum = redArray.reduce((sum, item) => sum + item.value, 0);
const blueSum = blueArray.reduce((sum, item) => sum + item.value, 0);
const graySum = grayArray.reduce((sum, item) => sum + item.value, 0);
const greatSum = blackSum + goldSum ;
// 全合計 
const totalSum = blackSum + goldSum + redSum + blueSum + graySum ;


/* html加工 */
/* %表示設定 */
const formatter = new Intl.NumberFormat('ja-JP', {
  style: 'percent',
  maximumFractionDigits: 4 // 小数点以下の表示桁数
});

//合計値
const totalSumContainer = document.getElementById('total-sum');
totalSumContainer.innerHTML = `試行回数 : ${totalSum}`;

// 大吉表示
const greatSumContainer = document.getElementById('great');
greatSumContainer.innerHTML = `大吉　排出 : ${greatSum} 確率 : ${formatter.format( greatSum / totalSum )}`;



//黒
if(true){

	//合計値
	const sumContainer = document.getElementById('black');
sumContainer.innerHTML = `黒　排出 : ${blackSum} 確率 : ${formatter.format( blackSum / totalSum )}`;

	const blackListContainer = 				document.getElementById('black-list');
	if ( blackArray.length > 0 )
	{
		blackArray.forEach(item => {
		const p = formatter.format( item.value / totalSum );
		const li = document.createElement('li');
		li.textContent =formatLine(item.name ,item.value,p);
	  	blackListContainer.appendChild(li);
		});
	} else
	{
		const li = document.createElement('li');
		li.textContent = formatEmpty ;
		blackListContainer.appendChild(li);
	}
}

// 金
if(true){
	const sumContainer = 		document.getElementById('gold');
	sumContainer.innerHTML = `金　排出 : ${goldSum} 確率 : ${formatter.format( goldSum / totalSum )}`;

	const goldListContainer = 				document.getElementById('gold-list');
	if ( goldArray.length > 0 )
	{
		goldArray.forEach(item => {
		const p = formatter.format( item.value / totalSum );
		const li = document.createElement('li');
		li.textContent =formatLine(item.name ,item.value,p);
	  	goldListContainer.appendChild(li);
		});
	} else
	{
		const li = document.createElement('li');
		li.textContent = formatEmpty ;
		goldListContainer.appendChild(li);
	}
}
// 赤
if(true){

	const sumContainer = 		document.getElementById('red');
	sumContainer.innerHTML = `中吉　排出 : ${redSum} 確率 : ${formatter.format( redSum / totalSum )}`;

	const redListContainer = 				document.getElementById('red-list');
	if ( redArray.length > 0 )
	{
		redArray.forEach(item => {
		const p = formatter.format( item.value / totalSum );
		const li = document.createElement('li');
		li.textContent =formatLine(item.name ,item.value,p);
	  	redListContainer.appendChild(li);
		});
	} else
	{
		const li = document.createElement('li');
		li.textContent = formatEmpty ;
		redListContainer.appendChild(li);
	}
}

// 青
if(true){

	const sumContainer = 		document.getElementById('blue');
	sumContainer.innerHTML = `小吉 排出 : ${blueSum} 確率 : ${formatter.format( blueSum / totalSum )}`;


	const blueListContainer = 				document.getElementById('blue-list');
	if ( blueArray.length > 0 )
	{
		blueArray.forEach(item => {
		const p = formatter.format( item.value / totalSum );
		const li = document.createElement('li');
		li.textContent =formatLine(item.name ,item.value,p);
	  	blueListContainer.appendChild(li);
		});
	} else
	{
		const li = document.createElement('li');
		li.textContent = formatEmpty ;
		blueListContainer.appendChild(li);
	}
}
// 灰
if(true){

	const sumContainer = 		document.getElementById('gray');
	sumContainer.innerHTML = `末吉　排出 : ${graySum} 確率 : ${formatter.format( graySum / totalSum )}`;

	const grayListContainer = 				document.getElementById('gray-list');
	if ( grayArray.length > 0 )
	{
		grayArray.forEach(item => {
		const p = formatter.format( item.value / totalSum );
		const li = document.createElement('li');
		li.textContent =formatLine(item.name ,item.value,p);
	  	grayListContainer.appendChild(li);
		});
	} else
	{
		const li = document.createElement('li');
		li.textContent = formatEmpty ;
		grayListContainer.appendChild(li);
	}
}

  
const result = document.getElementById('result');
result.innerHTML = `正常`;