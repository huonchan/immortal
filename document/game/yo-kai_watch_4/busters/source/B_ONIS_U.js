const title = "極・オニスターズ　全員集合！";
/* 報酬 */
const rewardData = `
プラチナのこけし,2
1つ星コイン,2
5つ星コイン,1
超けいけんちだま,2
赤鬼の極上ツノ,1
青鬼の極上ツノ,1
黒鬼の極上ツノ,1
赤鬼のツノ,3
青鬼のツノ,3
黒鬼のツノ,2
5つ星のアーク,1
Sランクのプチ魂,1
ツクモノの魂,3
オマモリの魂,2
`;

const bonusData= `
ツクモノの魂,3
オマモリの魂,9
プラチナのこけし,2
赤鬼のツノ,3
青鬼のツノ,1
黒鬼のツノ,3
5つ星のアーク,3
Sランクのプチ魂,1
`;

/* ドロップ品 */
const dropData = `
超けいけんちだま,3
神けいけんちだま,1
プラチナのこけし,2
ブラックこけし,2
鬼ガシャコイン・極,8
赤鬼の極上ツノ,4
青鬼の極上ツノ,8
黒鬼の極上ツノ,7
赤鬼のツノ,1
青鬼のツノ,5
黒鬼のツノ,8
`;

/* 報酬 */
const rewardArray = rewardData
  .trim()
  .split('\n')
  .map(line => {
    const [name, value] = line.split(',');
    return {
      name: name.trim(),
      value: Number(value.trim())
    };
  });

/* 合計値 */
const totalValue = rewardArray.reduce((sum, item) => sum + item.value, 0);

const count = document.getElementById('count');
count.innerHTML = `<strong>試行回数: ${totalValue}</strong>`;


// HTMLの ul 要素を取得
const rewardListContainer = document.getElementById('reward-list');

const formatter = new Intl.NumberFormat('ja-JP', {
  style: 'percent',
  maximumFractionDigits: 2 // 小数点以下の表示桁数
});

// 配列の各要素に対して繰り返し処理
rewardArray.forEach(item => {
  // 1 line ごとに li 要素を作成
  const li = document.createElement('li');
  
  // テキストを設定
  li.textContent = `${item.name} (取得数: ${item.value}) 確率:${formatter.format((item.value / totalValue ))}`;
  
  // ul の中に追加
  rewardListContainer.appendChild(li);
});


/* 報酬 */

const dropArray = dropData
  .trim()
  .split('\n')
  .map(line => {
    const [name, value] = line.split(',');
    return {
      name: name.trim(),
      value: Number(value.trim())
    };
  });

// HTMLの ul 要素を取得
const dropListContainer = document.getElementById('drop-list');

// 配列の各要素に対して繰り返し処理
dropArray.forEach(item => {
  // 1 line ごとに li 要素を作成
  const li = document.createElement('li');
  
  // テキストを設定
  li.textContent = `${item.name} (取得数: ${item.value})`;
  
  // ul の中に追加
  dropListContainer.appendChild(li);
});

const titleContainer = document.getElementById('title');
titleContainer.innerHTML = "妖怪ウォッチバスターズ_グリッチ利用";

document.title = "妖怪ウォッチバスターズ_グリッチ利用";