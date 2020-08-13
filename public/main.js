const socket = io.connect('http://localhost:3000', {
	'forceNew': true
});

socket.on('message', function(data) {

	console.log(data);
	render(data);

})
function render(data) {

	var html = data.map(function(elemento, index) {
		return (
			`<div>
				<strong>${elemento.autor}</strong>
				<em>${elemento.text} </em>
			</div>`);
	}).join(" ");

	document.getElementById('message').innerHTML = html;
}

function addMessage(evento) {

	var payload = {
		autor: document.getElementById("userName").value,
		text: document.getElementById("texto").value
	};

	socket.emit('newMessage', payload);
	return false;

}