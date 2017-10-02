export default function idGenerator() {
	var i = 0;
	return function() {
		return i++;
	};
}