import type { PhysicsShape } from './shapes';
import type { Fixture, PhysicsBody } from './bodies';
import type { PhysicsJoint } from './joints';

export interface PhysicsState {
	shapes: (PhysicsShape | null)[];
	fixtures: (Fixture | null)[];
	bodies: (PhysicsBody | null)[];
	joints: (PhysicsJoint | null)[];
	bro: number[];
	ppm: number;
	ss: [number, number][];
}

export interface DiscSwing {
	b: number;
	p: [number, number];
	l: number;
}

export interface DiscState {
	x: number;
	y: number;
	xv: number;
	yv: number;
	sx: number;
	sy: number;
	sxv: number;
	syv: number;
	a: number;
	av: number;
	a1a: number;
	team: number;
	a1: boolean;
	lhid: number;
	lht: number;
	ds: number;
	da: number;
	vt: number;
	tcd: number;
	swing?: DiscSwing;
	spawnTeamInfo?: unknown;
	ni?: boolean;
}

export interface Projectile {
	x: number;
	y: number;
	a: number;
	av: number;
	xv: number;
	yv: number;
	did: number;
	fte: number;
	type: string;
	team: number;
}

export interface CapZone {
	ty: number;
	p: number;
	l: number;
	i: number;
	o: number;
	ot: number;
	f: number;
}

export interface DiscDeath {
	i: number;
	x: number;
	y: number;
	xv: number;
	yv: number;
	f: number;
	m: number;
}

export interface MapSettings {
	re: boolean;
	nc: boolean;
	pq: number;
	gd: number;
	fl: boolean;
}

export interface Spawn {
	x: number;
	y: number;
	xv: number;
	yv: number;
	priority: number;
	r: boolean;
	f: boolean;
	b: boolean;
	gr: boolean;
	ye: boolean;
	n: string;
}

export interface CapZoneDef {
	n: string;
	ty: number;
	l: number;
	i: number;
}

export interface MapData {
	v: number;
	s: MapSettings;
	physics: {
		shapes: (PhysicsShape | null)[];
		fixtures: (Fixture | null)[];
		bodies: (PhysicsBody | null)[];
		joints: (PhysicsJoint | null)[];
		bro: number[];
		ppm: number;
	};
	spawns: Spawn[];
	capZones: CapZoneDef[];
	m: {
		a: string;
		n: string;
		dbv: number;
		dbid: number;
		authid: number;
		date: string;
		rxid: number;
		rxn: string;
		rxa: string;
		rxdb: number;
		cr: string[];
		pub: boolean;
		mo: string;
	};
}

export interface GameState {
	discs: (DiscState | null | undefined)[];
	discDeaths: DiscDeath[];
	physics: PhysicsState;
	capZones: (CapZone | null)[];
	projectiles: (Projectile | null)[];
	ms: MapSettings;
	mm: MapData['m'];
	scores: (number | null)[];
	lscr: number;
	fte: number;
	ftu: number;
	rl: number;
	rc: number;
	seed: number;
	players: ({ id: number; team: number } | null)[];
	sts: unknown[] | null;
}

export interface GameSettings {
	mo: string;
	ga: string;
	tea: boolean;
	wl: number;
	gt: number;
	bal: Record<number, number>;
	map: {
		spawns: Spawn[];
		[key: string]: unknown;
	};
	maps?: unknown[];
	q?: string | false;
}

export interface PlayerInput {
	up: boolean;
	down: boolean;
	left: boolean;
	right: boolean;
	action: boolean;
	action2: boolean;
	ml?: boolean;
}

export interface StepEvents {
	playersJoined?: { id: number; t: number }[];
	playersLeft?: number[];
	pc?: number;
}

export interface StepResult {
	state: GameState;
	sounds: unknown[];
	shakeVector: { x: number; y: number };
}
