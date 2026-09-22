const title = "災厄の化身　討滅戦！";
/* 報酬 */
const rewardData = `
大けいけんちだま,2
虹のアーク,1
ウワノソラの魂,1
`;

/* ドロップ品 */
const dropData = `
どんどろの羽釜,3
日ノ神のしもべ,1
フゥミンの目薬,2
ふぶき姫のかみどめ,1
小けいけんちだま,2
中けいけんちだま,4
大けいけんちだま,1
超けいけんちだま,2
鉄のこけし,1
銅のこけし,3
銀のこけし,3
金のこけし,2
プラチナのこけし,3
鬼ガシャコイン・超,1
封魔のアーク・オンネン,4
封魔のアーク・ウワノソラ,1
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