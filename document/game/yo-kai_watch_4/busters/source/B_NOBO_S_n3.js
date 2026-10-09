const title = " 超・のぼせトンマン　アチアチ熱闘！";
/* 報酬 */
const rewardData = `
B極玉,7
トンマンの縄,
大けいけんちだま,2
金のこけし,2
虹のアーク,
1つ星コイン,
モノノケの魂,3
Sランクのプチ魂,
`;

/* ドロップ品 */
const dropData = `
トンマン印の桶,
ミニけいけんちだま,
小けいけんちだま,
中けいけんちだま,
大けいけんちだま,1
超けいけんちだま,
鉄のこけし,
銅のこけし,
銀のこけし,
金のこけし,
プラチナのこけし,
鬼ガシャコイン・超,1
鬼ガシャコイン・極,
封魔のアーク・ツクモノ,
封魔のアーク・モノノケ,
封魔のアーク・ウワノソラ,
トンマンの縄,8
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