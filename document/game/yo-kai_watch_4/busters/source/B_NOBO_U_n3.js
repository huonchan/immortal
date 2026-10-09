const title = " 極・のぼせトンマン　アチアチ熱闘！";
/* 報酬 */
const rewardData = `
プラチナのこけし,3
超けいけんちだま,3
5つ星のアーク,2
1つ星コイン,1
トンマンの極縄.1
Sランクのプチ魂,1
モノノケの魂,1
`;

/* B玉報酬 */
const bonusData = `
超けいけんちだま,5
プラチナのこけし,1
5つ星のアーク,5
モノノケの魂,1
`;

/* ドロップ品 */
const dropData = `
トンマン印の桶,
ミニけいけんちだま,
小けいけんちだま,
中けいけんちだま,
大けいけんちだま,
超けいけんちだま,
鉄のこけし,
銅のこけし,
銀のこけし,
金のこけし,
プラチナのこけし,
鬼ガシャコイン・超,
鬼ガシャコイン・極,1
封魔のアーク・モノノケ,
トンマンの縄,2
トンマンの極縄,7
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
titleContainer.innerHTML = title;

document.title = title;