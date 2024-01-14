export function removePassword(user) {
	const { password, ...rest } = Object.assign({}, user._doc);
	return rest;
}
