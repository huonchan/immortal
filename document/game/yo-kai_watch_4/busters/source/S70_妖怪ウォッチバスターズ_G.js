/* 報酬 */
const rewardData = `
Bジバニャンの魂・金,5
Bコマさんの魂・金,8
B-USAピョンの魂・金,9
大けいけんちだま,20
銀のこけし,19
ガシャコイン,6
モノノケの魂,25
オマモリの魂,16
ウワノソラの魂,19
ミュージックカード,3
`;

/* ドロップ品 */
const dropData = `

Fジバニャンの魂・白,46
Fコマさんの魂・白,53
コマじろうの魂・白,55
Fコマじろうの魂・白,66
猫又の魂・白,53
,
Fジバニャンの魂・赤,12
Fコマさんの魂・赤,6
コマじろうの魂・赤,18
Fコマじろうの魂・赤,10
猫又の魂・赤,15
Fジバニャンの魂・金,4
Fコマさんの魂・金,3
コマじろうの魂・金,2
Fコマじろうの魂・金,1
猫又の魂・金,3
,
ミニけいけんちだま,6
小けいけんちだま,33
中けいけんちだま,66
大けいけんちだま,64
超けいけんちだま,9
鉄のこけし,5
銅のこけし,23
銀のこけし,51
金のこけし,87
プラチナのこけし,17
鬼ガシャコイン,55
鬼ガシャコイン・超,56
,
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