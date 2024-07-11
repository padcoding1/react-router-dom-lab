// src/App.jsx
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";

function App() {
	const [mailboxes, setMailboxes] = useState([]);

	const addBox = (formData) => {
		const newMailbox = {
			_id: mailboxes.length + 1,
			boxHolder: formData.boxHolder,
			boxSize: formData.boxSize,
		};
		setMailboxes([...mailboxes, newMailbox]);
		// navigate("./mailboxes");
	};

	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/mailboxes"
					element={<MailboxList mailboxes={mailboxes} />}
				/>
				<Route
					path="/new-mailbox"
					element={<MailboxForm addBox={addBox} />}
				/>
				<Route
					path="/mailboxes/:mailboxId"
					element={<MailboxDetails mailboxes={mailboxes} />}
				/>
			</Routes>
		</div>
	);
}



export default App;
