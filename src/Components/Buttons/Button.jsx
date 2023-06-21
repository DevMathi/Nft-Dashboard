export function Button({ text, color, py, px, anotherStyle }) {
	const style = `drop-shadow-2xl py-${py} px-${px} rounded-xl hover:brightness-50 ${color}  font-poppins text-white ${anotherStyle}`;

	return (
		<button type='button' className={style}>
			{text}
		</button>
	);
}
