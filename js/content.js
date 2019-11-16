document.addEventListener('DOMContentLoaded', function(event) {
    init()
});
function init() {
	setInterval(
		() => {
			const { host } = window.location
			if(host === 'im.dingtalk.com') {
				const list = document.querySelectorAll('.conv-item.list-item')
				list.forEach(
					v => {
						if(!/^<a/.test(v.parentNode.innerHTML)) {
							v.parentNode.innerHTML = v.parentNode.innerHTML.replace(/^<div/, '<a').replace(/div>$/, 'a>')
						}
					}
				)
			}else if(host === 'www.teambition.com') {
				const list = document.querySelectorAll('.task-infos')
				list.forEach(
					v => {
						if(!/<a class="task-infos"/.test(v.parentNode.innerHTML)) {
							v.parentNode.innerHTML = v.parentNode.innerHTML.replace(/<div class="task-infos"/, '<a class="task-infos"').replace(/<\/div><span/, '</a><span')
						}
					}
				)
			}
			
		}, 2000
	)
}
