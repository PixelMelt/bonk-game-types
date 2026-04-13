export interface RevoluteJointData {
	la: number;
	ua: number;
	mmt: number;
	ms: number;
	el: boolean;
	em: boolean;
	cc: boolean;
	bf: number;
	dl: boolean;
}

export interface RevoluteJoint {
	type: 'rv';
	d: RevoluteJointData;
	ba: number;
	bb: number;
	aa: [number, number];
	ab: [number, number];
	ra: number;
}

export interface PrismaticJointData {
	el: boolean;
	lt: number;
	ut: number;
	em: boolean;
	ms: number;
	mmf: number;
	cc: boolean;
	bf: number;
	dl: boolean;
	cd: boolean;
}

export interface PrismaticJoint {
	type: 'p';
	d: PrismaticJointData;
	ba: number;
	bb: number;
	aa: [number, number];
	ab: [number, number];
	axa: [number, number];
	ra: number;
	cs: number;
}

export interface DistanceJointData {
	fh: number;
	dr: number;
	cc: boolean;
	bf: number;
	dl: boolean;
}

export interface DistanceJoint {
	type: 'd';
	d: DistanceJointData;
	ba: number;
	bb: number;
	aa: [number, number];
	ab: [number, number];
	len: number;
}

export interface LPJJoint {
	type: 'lpj';
	d: { cc: boolean; bf: number; dl: boolean };
	ba: number;
	bb: number;
	pax: number;
	pay: number;
	pa: number;
	pf: number;
	pl: number;
	pu: number;
	plen: number;
	pms: number;
}

export interface LSJJoint {
	type: 'lsj';
	d: { cc: boolean; bf: number; dl: boolean };
	ba: number;
	bb: number;
	sax: number;
	say: number;
	sf: number;
	slen: number;
}

export interface GearJoint {
	type: 'g';
	n: string;
	ja: number;
	jb: number;
	r: number;
}

export type PhysicsJoint =
	| RevoluteJoint
	| PrismaticJoint
	| DistanceJoint
	| LPJJoint
	| LSJJoint
	| GearJoint;
