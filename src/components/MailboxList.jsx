import { Link } from 'react-router-dom';



const MailboxList = ({ mailboxes }) => {
    return (
      <div className="mailboxes">
        {mailboxes.map(mailbox => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mailbox">{mailbox._id}</div>
          </Link>
        ))}
      </div>
    );
  };
  
  export default MailboxList;