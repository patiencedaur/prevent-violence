/* global monogatari */

// Persistent Storage Variable
monogatari.storage ({
	personal_ideas: {	// User sets this at the beginning of the novel.
		family_important: true,
		persist: true
	},

	plot: {
		// set all to false
		had_sex: false,
		episode1_taxi_called: false,
		episode1_meeting: false,
		episode2_dress: false,
		episode3_got_upset: false,
		episode3_phone_broken: false,
	}
});
