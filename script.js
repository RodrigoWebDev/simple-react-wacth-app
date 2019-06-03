function relogio(){
	const element = (
		<div className="container">
			<span className="time">{new Date().toLocaleTimeString()}</span>
			<img src="http://rqueiroz.surge.sh/img/watch-mockup.jpg"/>
			<h1 className="title"><img className="react-logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>React.js watch App</h1>
		</div>
	);
	ReactDOM.render(
		element, document.getElementById("root")
	)
}

setInterval(relogio, 1000);