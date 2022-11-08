import BeatLoader from "react-spinners/BeatLoader";

function Spinner() {
	const override = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	}
	return (
		<BeatLoader color="#3751FF" size={20} cssOverride={override} />
	)
}

export default Spinner;