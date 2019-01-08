window.onload = function () {

	var app = {};

	app.init = function(apiKey) {
		// Apply Button creation
		var applyBtn = document.createElement('button');
		applyBtn.id = 'widget-btn-apply';
		applyBtn.innerHTML = 'Apply';

		// Setting button styles
		// applyBtn.style.width = '70px';
		// applyBtn.style.height = '70px';
		// applyBtn.style.backgroundColor = '#7862EE';
		// applyBtn.style.borderRadius = '50%'
		// applyBtn.style.position = 'absolute';
		// applyBtn.style.right = '20px';
		// applyBtn.style.bottom = '20px';
		// applyBtn.style.color = '#fff';
		// applyBtn.style.fontWeight = '600';
		// applyBtn.style.cursor = 'pointer';
		// applyBtn.style.fontSize = '16px';
		/// applyBtn.style.zIndex = '20';
		// applyBtn.style.outline = 'none';
		// applyBtn.style.border = 'none';

		// Apply Button creation
		var closeBtn = document.createElement('button');
		closeBtn.id = 'widget-btn-close';

		// Close button styles
		// closeBtn.innerHTML = 'Close';
		// closeBtn.style.position = 'absolute';
		// closeBtn.style.width = '50px';
		// closeBtn.style.right = '50px';
		// closeBtn.style.top = '20px';
		// closeBtn.style.cursor = 'pointer';

		// Modal creation
		var modal = document.createElement('div');
		modal.id = 'widget-modal';

		// Iframe creation
		var iframe = document.createElement('iframe');
		iframe.id = 'widget-iframe';

		// Setting iframe attributes and styles
		iframe.src = 'http://incumato.test/widget/' + apiKey;
		iframe.innerHTML = 'Fail to load.';
		// iframe.style.width = '100%';
		// iframe.style.height = '100%';
		// iframe.style.border = 'none';
		// iframe.style.display = 'none';

		// Loader creation
		var loader = document.createElement('div');
		loader.id = 'widget-loader';

		// Loader attributes and styles
		// loader.style.border = '16px solid #f3f3f3';
		// loader.style.borderTop = '16px solid #3498db';
		// loader.style.borderRadius = '50%';
		// loader.style.width = '120px';
		// loader.style.height = '120px';
		// loader.style.animation = 'spin 2s linear infinite';

		// Setting modal styles
		// modal.style.width = '100%';
		// modal.style.height = '100%';
		// modal.style.zIndex = '100';
		// modal.style.position = 'absolute';
		// modal.style.display = 'flex';
		// modal.style.alignItems = 'center';
		// modal.style.flexDirection = 'column';
		// modal.style.justifyContent = 'center';

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

	window.Widget = app;
	console.log(window.Widget);

}