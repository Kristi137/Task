// Fetching Users
fetch('https://json.medrating.org/users')
  .then((response) => {
	return response.json();
})
  .then((data) => {
	data.forEach((liEl) => {
		const ul = document.querySelector('.main-li');
		let li = document.createElement('li');
		li.setAttribute("data-user", liEl.id);
		li.id = liEl.id;
		li.onclick = fetchAlbums;
		li.className = 'users lists show';
		li.innerHTML = liEl.name;
		ul.appendChild(li);
		if(!liEl.name) {
			li.remove();
		}
	})
});

