export function Button({ text, color, py, px, anotherStyle }) {
	const style = `drop-shadow-2xl mr-5 py-${py} px-${px} rounded-xl hover:brightness-50 ${color}  font-poppins text-white ${anotherStyle}`;

	return (
		<button type='button' className={style}>
			{text}
		</button>
	);
}
