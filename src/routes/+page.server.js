import fs from 'fs';
import yaml from 'js-yaml';

export function load() {
	let data = yaml.load(fs.readFileSync('src/data/data.yaml').toString());
	return data;
}
