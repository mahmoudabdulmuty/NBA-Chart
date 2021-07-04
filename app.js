const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];

// creating ul-parent element & prepending it to body
const ul = document.createElement('ul');
document.body.prepend(ul);

// looping over GamesArray
for (const game of warriorsGames) {
	// creating new Li for a game
	const newLi = document.createElement('li');

	const awayTeam = game.awayTeam.team;
	const homeTeam = game.homeTeam.team;
	const awayWinner = game.awayTeam.isWinner;
	const homeWinner = game.homeTeam.isWinner;
	// displaying gameTitle
	const gameTitle = `${game.awayTeam.team} @ ${game.homeTeam.team}`;

	// displaying gameScore
	const gameScore =
		game.awayTeam.points > game.homeTeam.points
			? `<b>${game.awayTeam.points}</b>-${game.homeTeam.points}`
			: `${game.awayTeam.points}-<b>${game.homeTeam.points}</b>`;

	// creating new li Element
	newLi.innerHTML = `${gameTitle} ${gameScore} `;

	// checking winning team & applying green or red classes
	if (awayTeam === 'Golden State' && awayWinner) {
		newLi.classList.add('win');
	} else if (homeTeam === 'Golden State' && homeWinner) {
		newLi.classList.add('win');
	} else {
		newLi.classList.add('lose');
	}

	// appending new li Element to ul-parent
	ul.append(newLi);
}
