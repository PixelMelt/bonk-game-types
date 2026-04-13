export interface Fixture {
	sh: number;
	n: string;
	fr: number | null;
	fp: boolean | null;
	re: number | null;
	de: number | null;
	f: number;
	d: boolean;
	np: boolean;
	ng: boolean;
	ig: boolean;
}

export interface BodyConstantForce {
	x: number;
	y: number;
	w: boolean;
	ct: number;
}

export interface BodyForceZone {
	on: boolean;
	x: number;
	y: number;
	d: boolean;
	p: boolean;
	a: boolean;
	t: number;
	cf: number;
}

export interface BodySettings {
	type: 's' | 'd' | 'k';
	n: string;
	fric: number;
	fricp: boolean;
	re: number;
	de: number;
	ld: number;
	ad: number;
	fr: boolean;
	bu: boolean;
	f_c: number;
	f_p: boolean;
	f_1: boolean;
	f_2: boolean;
	f_3: boolean;
	f_4: boolean;
}

export interface PhysicsBody {
	p: [number, number];
	a: number;
	lv: [number, number];
	av: number;
	cf: BodyConstantForce;
	fx: number[];
	fz: BodyForceZone;
	s: BodySettings;
}
