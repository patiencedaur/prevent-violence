const { Component } = Monogatari;

class ExitModal extends Component {

	static setup () {
		this.engine.translation ('English', {
			'Exit': 'Exit'
		});

    this.engine.translation ('Русский', {
			'Exit': 'Выход'
		});

		this.engine.component ('quick-menu').addButtonAfter ('Quit', {
			string: 'Exit',
			icon: 'fas fa-door-open',
			data: {
				action: 'jump',
				jump: 'Good'
			}
		});
		return Promise.resolve ();
	}

	static bind () {
		this.engine.registerListener ('exit', {
			callback: () => {
				this.instances ((element) => {
					element.classList.toggle ('modal--active');
				});
			}
		});
	}

	static onLoad () {
		this.instances ((element) => {
			element.forceRender ();
		});
		return Promise.resolve ();
	}


	willMount () {
		this.classList.add ('modal');
		return Promise.resolve ();
	}
}
