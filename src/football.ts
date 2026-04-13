export interface FootballBallState {
	x: number;
	y: number;
	xv: number;
	yv: number;
}

export interface FootballDiscState {
	x: number;
	y: number;
	xv: number;
	yv: number;
	team: number;
	kickReady: boolean;
	a1: boolean;
	a1a: number;
}

export interface FootballState {
	scores: number[];
	goalHeight: number;
	borderThickness: number;
	borderThicknessXInner: number;
	borderThicknessYInner: number;
	ppm: number;
	lscr: number;
	fte: number;
	ftu: number;
	seed: number;
	ni: boolean;
	ball: FootballBallState;
	discs: (FootballDiscState | null)[];
	players: ({ id: number; team: number } | null)[];
	sts: unknown[];
}
