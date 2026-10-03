const title = "極・オニスターズ　全員集合！（ナラク2）";
/* 報酬 */
const rewardData = `
プラチナのこけし,
1つ星コイン,
5つ星コイン,
超けいけんちだま,
赤鬼の極上ツノ,1
青鬼の極上ツノ,
黒鬼の極上ツノ,1
赤鬼のツノ,
青鬼のツノ,
黒鬼のツノ,
5つ星のアーク,
Sランクのプチ魂,
ツクモノの魂,
オマモリの魂,
`;

const bonusData= `
ツクモノの魂,
オマモリの魂,
プラチナのこけし,
赤鬼のツノ,
青鬼のツノ,
黒鬼のツノ,1
5つ星のアーク,
Sランクのプチ魂,
`;

/* ドロップ品 */
const dropData = `
超けいけんちだま,
神けいけんちだま,
プラチナのこけし,1
ブラックこけし,
鬼ガシャコイン・極,
赤鬼の極上ツノ,2
青鬼の極上ツノ,1
黒鬼の極上ツノ,
赤鬼のツノ,
青鬼のツノ,
黒鬼のツノ,
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