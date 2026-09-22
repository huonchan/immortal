const title = "日の影に眠りし魔王";
/* 報酬 */
const rewardData = `
紫炎のボス魂,1
妖グルト,3
ガシャコイン,1
大けいけんちだま,1
銀のこけし,3
ウワノソラの魂,10
`;

/* ドロップ品 */
const dropData = `
いたしかたなしの帯,12
瓜坊の牙,2
ダメボーイの手袋,1
牛鬼の目玉,2
ミニけいけんちだま,7
小けいけんちだま,25
中けいけんちだま,13
大けいけんちだま,4
超けいけんちだま,3
鉄のこけし,12
銅のこけし,12
銀のこけし,11
金のこけし,10
プラチナのこけし,4
鬼ガシャコイン・超,2
封魔のアーク・ゴーリキ,19
封魔のアーク・オンネン,1
封魔のアーク・モノノケ,8
封魔のアーク・ツクモノ,8
封魔のアーク・オマモリ,1
封魔のアーク・ウワノソラ,3
すき焼き弁当,5
鳥すき焼き,4
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