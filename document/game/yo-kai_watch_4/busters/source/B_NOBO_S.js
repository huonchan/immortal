const title = " 超・のぼせトンマン　アチアチ熱闘！";
/* 報酬 */
const rewardData = `
B極玉,6
トンマンの縄,1
大けいけんちだま,3
金のこけし,3
虹のアーク,4
モノノケの魂,4
`;

/* ドロップ品 */
const dropData = `
トンマン印の桶,1
メラメライオンの炎,3
ミニけいけんちだま,4
小けいけんちだま,6
中けいけんちだま,2
鉄のこけし,2
銅のこけし,7
銀のこけし,4
金のこけし,2
封魔のアーク・ツクモノ,7
封魔のアーク・モノノケ,6
封魔のアーク・ウワノソラ,3
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