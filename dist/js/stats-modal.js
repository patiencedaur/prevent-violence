const { Component } = Monogatari;

class StatsModal extends Component {

	static setup () {
		this.engine.translation ('English', {
			'Stats': 'Stats'
		});

    this.engine.translation ('Русский', {
			'Stats': 'Статистика'
		});

		this.engine.component ('quick-menu').addButtonAfter ('Hide', {
			string: 'Stats',
			icon: 'fas fa-tasks',
			data: {
				action: 'stats'
			}
		});
		return Promise.resolve ();
	}

	static bind () {
		this.engine.registerListener ('stats', {
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

	render () {
		// const stats = this.engine.storage ().player.stats;
		// to evoke a stat: use $stats.something in the html
		// this will be the exit button. move it to the end
		return `
			<div component="modal" class="modal__content">
				<h3 data-string="Stats">Stats</h3>
				<button data-action="jump" data-jump="Episode3">I AM LINK</button>
								<button data-action="stats">Close</button>
			</div>`;
	}
}
