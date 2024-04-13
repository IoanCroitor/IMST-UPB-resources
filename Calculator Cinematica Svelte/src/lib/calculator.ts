interface MechanismResults {
	phi1_deg: number;
	phi2_deg_1: number;
	phi2_deg_2: number;
	phi3: number;
	omega2: number;
	omega3: number;
	epsilon2: number;
	epsilon3: number;
	phi4: number;
}

function strip(number: number) {
	return parseFloat(number.toString()).toPrecision(12).to;
}

export function calculateMechanism(k: number): MechanismResults {
	const l1 = 0.029;
	const l2 = 0.104;
	const l3 = 0.078;
	const l3s = 0.048;
	const l4 = 0.094;
	const xE = 0.085;
	const yE = -0.014;
	const yF = 0;
	let phi1_deg = k * 10;
	let phi1_rad = (phi1_deg * Math.PI) / 180;
	const omega1 = 2;

	let A = 2 * (l1 * l2 * Math.cos(phi1_rad) - l2 * xE);
	let B = 2 * (l1 * l2 * Math.sin(phi1_rad) - l2 * yE);
	let C =
		Math.pow(l3, 2) -
		Math.pow(l1, 2) -
		Math.pow(l2, 2) -
		Math.pow(xE, 2) -
		Math.pow(yE, 2) +
		2 * l1 * xE * Math.cos(phi1_rad) +
		2 * l1 * yE * Math.sin(phi1_rad);
	let term1 = 2 * B * C;
	let term2 = Math.sqrt(
		4 * Math.pow(B, 2) * Math.pow(C, 2) -
			4 * (Math.pow(A, 2) + Math.pow(B, 2)) * (Math.pow(C, 2) - Math.pow(A, 2))
	);
	let term3 = 2 * (Math.pow(A, 2) + Math.pow(B, 2));
	let sin_phi2_1 = (term1 + term2) / term3;
	let sin_phi2_2 = (term1 - term2) / term3;
	let phi2_rad_1 = Math.asin(sin_phi2_1);
	let phi2_rad_2 = Math.asin(sin_phi2_2);

	let sin_phi3 = (l1 * Math.sin(phi1_rad) + l2 * Math.sin(phi2_rad_1) - yE) / l3;
	let cos_phi3 = (l1 * Math.cos(phi1_rad) + l2 * Math.cos(phi2_rad_1) - xE) / l3;
	let phi3_rad = Math.asin(sin_phi3);
	let phi3_rad_corrected = phi3_rad;

	if (sin_phi3 > 0 && cos_phi3 < 0) {
		phi3_rad_corrected = Math.PI - phi3_rad;
	} else if (sin_phi3 < 0 && cos_phi3 < 0) {
		phi3_rad_corrected = Math.PI + phi3_rad;
	} else if (sin_phi3 < 0 && cos_phi3 > 0) {
		phi3_rad_corrected = 2 * Math.PI - phi3_rad;
	}

	let A1 = l2 * Math.sin(phi2_rad_1);
	let A2 = l2 * Math.cos(phi2_rad_1);
	let B1 = -l3 * Math.sin(phi3_rad_corrected);
	let B2 = -l3 * Math.cos(phi3_rad_corrected);
	let C1 = -l1 * omega1 * Math.sin(phi1_rad);
	let C2 = -l1 * omega1 * Math.cos(phi1_rad);

	let delta1 = A1 * B2 - A2 * B1;
	let delta2w = C1 * B2 - C2 * B1;
	let delta3w = A1 * C2 - A2 * C1;

	let omega2 = delta2w / delta1;
	let omega3 = delta3w / delta1;

	let D1 =
		-Math.pow(omega1, 2) * l1 * Math.cos(phi1_rad) -
		Math.pow(omega2, 2) * l2 * Math.cos(phi2_rad_1) +
		Math.pow(omega3, 2) * l3 * Math.cos(phi3_rad_corrected);
	let D2 =
		Math.pow(omega1, 2) * l1 * Math.sin(phi1_rad) +
		Math.pow(omega2, 2) * l2 * Math.sin(phi2_rad_1) -
		Math.pow(omega3, 2) * l3 * Math.sin(phi3_rad_corrected);

	let delta2e = D1 * B2 - D2 * B1;
	let delta3e = A1 * D2 - A2 * D1;

	let epsilon2 = delta2e / delta1;
	let epsilon3 = delta3e / delta1;

	let sin_phi4 = (yF - yE - l3s * Math.sin(phi3_rad_corrected)) / l4;
	let phi4_rad = Math.asin(sin_phi4);

	// Return an object structured according to the MechanismResults interface
	return {
		phi1_deg: phi1_deg,
		phi2_deg_1: (phi2_rad_1 * 180) / Math.PI,
		phi2_deg_2: (phi2_rad_2 * 180) / Math.PI,
		phi3: (phi3_rad_corrected * 180) / Math.PI,
		omega2: omega2,
		omega3: omega3,
		epsilon2: epsilon2,
		epsilon3: epsilon3,
		phi4: (phi4_rad * 180) / Math.PI
	};
}
