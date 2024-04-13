import initWasm from '../../wasm/mainWASM.js';
import type { MechanismResults } from './types.js';

export async function calculateMechanism(k: number): Promise<MechanismResults> {
	const wasmModule = await initWasm();
	const result = wasmModule.calculateMechanism(k) as MechanismResults;
	return result;
}
