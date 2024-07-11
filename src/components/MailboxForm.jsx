import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
	const navigate = useNavigate();
	const [boxHolder, setBoxHolder] = useState("");
	const [boxSize, setBoxSize] = useState("Small");

	const handleSubmit = (event) => {
		event.preventDefault();
		const newMailbox = {
			boxHolder,
			boxSize,
		};

		addBox(newMailbox);
		navigate("/mailboxes");
	};

	return (
		<div>
			<h2>New Mailbox</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Owner Name:
					<input
						type="text"
						value={boxHolder}
						onChange={(e) => setBoxHolder(e.target.value)}
						required
					/>
				</label>
				<label>
					Mailbox Size:
					<select
						value={boxSize}
						onChange={(e) => setBoxSize(e.target.value)}
					>
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
						<option value="Supersize">Supersize, baby!</option>
					</select>
				</label>
				<button type="submit">Create Mailbox</button>
			</form>
		</div>
	);
};

export default MailboxForm;
