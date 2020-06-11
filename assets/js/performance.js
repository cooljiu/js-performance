//参考URL
//https://developer.mozilla.org/ja/docs/Web/API/Performance

// performance.mark('start');
	//計測したい処理
// performance.mark('end');
// performance.measure('test', 'start', 'end');

//DOM操作の回数を減らす検証

let $jsContents2 = $('#js-contents2');
let html = '';

//通常処理
performance.mark('test1Start');
// 計測したい処理
for (let i = 0; i < 1000; i++) {
	$('#js-contents1').append('<p>' + i + '</p>');
}
performance.mark('test1End');

//オブジェクトをキャッシュする
performance.mark('test2Start');
// 計測したい処理
for (let i = 0; i < 1000; i++) {
	html += '<p>' + i + '</p>';
}
$jsContents2.append(html);
performance.mark('test2End');
// console.log(performance.toJSON());
performance.measure('test1', 'test1Start', 'test1End');
performance.measure('test2', 'test2Start', 'test2End');

//時間表示処理
const durationFunc = function (name) {
	let performanceData = performance.getEntriesByType('measure');
	let testName = name;
	let num = 0
	$.each(performanceData, function (i, data) {
		if(data.name == testName) num = i
	});
	let duration = performance.getEntriesByType('measure')[num].duration;
	duration = (duration * 0.001).toFixed(3);
	return duration + 's';
}

console.log('test1=' + durationFunc('test1'));
console.log('test2='+durationFunc('test2'));


