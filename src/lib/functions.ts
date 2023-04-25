export function dateConvert(date: string) {
	const formattedDate: Date = new Date(date);
	// Adjust because dates come back in UTC and I am working in Pacific timezone which is always 1 day behind UTC
	formattedDate.setDate(formattedDate.getDate() + 1);
	const dateString: string =
		formattedDate.toLocaleDateString('en-us', { month: 'short' }) +
		' ' +
		formattedDate.getDate() +
		', ' +
		formattedDate.getFullYear();
	return dateString;
}
