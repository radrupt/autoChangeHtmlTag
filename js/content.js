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
							v.parentNode.innerHTML = v.parentNode.innerHTML.replace(/^<div/, '<a')
						}
					}
				)
			}else if(host === 'www.teambition.com') {
				let list = document.querySelectorAll('.task-infos')
				list.forEach(
					v => {
						if(!/<a class="task-infos"/.test(v.parentNode.innerHTML)) {
							v.parentNode.innerHTML = v.parentNode.innerHTML.replace(/<div class="task-infos"/, '<a class="task-infos"')
						}
					}
				)
				list = document.querySelectorAll('.kanban-droppable-bucket-cards')
				list.forEach(
					v => {
						if(!/<div class="kanban-droppable-bucket-cards/.test(v.parentNode.innerHTML)) {
							v.parentNode.innerHTML = v.parentNode.innerHTML.replace(/<div class="kanban-droppable-bucket-cards/, '<a class="kanban-droppable-bucket-cards')
						}
					}
				)
			}
			
		}, 2000
	)
}
