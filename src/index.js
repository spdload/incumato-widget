window.onload = function() {

	var app = {};

	app.init = function(apiKey) {
		if (!Widget.widgetId) {
			console.warn('Widget.widgetId is not defined. Please define it!')
		}
		// Apply Button creation
		var applyBtn = document.createElement('button');
		applyBtn.id = 'widget-btn-apply';
		applyBtn.innerHTML = 'Apply';

		// Apply Button creation
		var closeBtn = document.createElement('button');
		closeBtn.id = 'widget-btn-close';

		// Modal creation
		var modal = document.createElement('div');
		modal.id = 'widget-modal';

		// Iframe creation
		var iframe = document.createElement('iframe');
		iframe.id = 'widget-iframe';

		// Setting iframe attributes and styles
		iframe.src = 'https://app.incumato.de/widget/' + Widget.widgetId;
		iframe.innerHTML = 'Fail to load.';

		// Loader creation
		var loader = document.createElement('div');
		loader.id = 'widget-loader';

		// Provide event listeners
		applyBtn.addEventListener("click", function() {
			// app.show(modal);
			// app.hide(button)
			document.body.removeChild(applyBtn);
			document.body.appendChild(modal);

			modal.appendChild(loader);
			modal.appendChild(iframe);
		}, false);

		closeBtn.addEventListener("click", function() {
			document.body.removeChild(modal);
			document.body.appendChild(applyBtn);
		}, false);

		iframe.addEventListener('load', function() {
			modal.removeChild(loader);
			modal.appendChild(closeBtn);
			iframe.style.display = 'block';
		}, true);

		document.body.appendChild(applyBtn);
	}

	app.init(Widget.widgetId)

}
