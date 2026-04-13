export interface BoxShape {
	type: 'bx';
	w: number;
	h: number;
	c: [number, number];
	a: number;
	sk: boolean;
}

export interface CircleShape {
	type: 'ci';
	r: number;
	c: [number, number];
	sk: boolean;
}

export interface PolyShape {
	type: 'po';
	v: [number, number][];
	s: number;
	a: number;
	c: [number, number];
}

export interface ChainShape {
	type: 'ch';
	v: [number, number][];
	s: number;
	a: number;
	c: [number, number];
	l: boolean;
	sk: boolean;
}

export type PhysicsShape = BoxShape | CircleShape | PolyShape | ChainShape;
