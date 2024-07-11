import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MailboxDetails = ({ mailboxes }) => {
	console.log("mailboxes: ", mailboxes);
	const { mailboxId } = useParams();
	console.log("mailboxId: ", mailboxId);
	const navigate = useNavigate();
	const mailbox = mailboxes.find(
		(mailbox) => mailbox._id === Number(mailboxId)
	);
	if (!mailbox) {
		return <h2>Mailbox not found!</h2>;
	} else {
		return (
			<div>
				<h2>Mailbox Details</h2>
				{mailbox && (
					<div>
						<p>Box Number: {mailbox._id}</p>
						<p>Boxholder: {mailbox.boxHolder}</p>
						<p>Box Size: {mailbox.boxSize}</p>
					</div>
				)}
			</div>
		);
	}
};
export default MailboxDetails;
