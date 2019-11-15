document.addEventListener('DOMContentLoaded', function(event) {
    init()
});
function init() {
	setInterval(
		() => {
			const list = document.querySelectorAll('.conv-item.list-item')
			list.forEach(
				v => {
					if(!/^<a/.test(v.parentNode.innerHTML)) {
						v.parentNode.innerHTML = v.parentNode.innerHTML.replace(/^<div/, '<a').replace(/div>$/, 'a>')
					}
				}
			)
		}, 2000
	)
}
