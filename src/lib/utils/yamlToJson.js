const yaml = require('js-yaml');

const yamlToJson = (yamlString) => {
	try {
		const jsonObject = yaml.load(yamlString);
		return JSON.stringify(jsonObject, null, 2);
	} catch (error) {
		console.error('Error converting YAML to JSON:', error);
		return null;
	}
};

export default yamlToJson;
