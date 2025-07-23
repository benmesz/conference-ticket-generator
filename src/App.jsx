import "./App.css";
import UserDetailsForm from "./components/UserDetailsForm";
import Ticket from "./components/Ticket";
import { useState } from "react";

function App() {
  const [view, setView] = useState("form");
  const [formData, setFormData] = useState(null);

  if (view == "form") {
    return (
      <>
        <header>
          <img src="./logo-full.svg" />
        </header>
        <UserDetailsForm
          onSubmit={(data) => {
            if (!data.name?.trim() || !data.email?.trim()) {
              alert("Please fill in both Full Name and Email Address fields.");
              return;
            }
            setFormData(data);
            setView("ticket");
          }}
        />
      </>
    );
  }

  if (view == "ticket") {
    return (
      <>
        <header>
          <img src="./logo-full.svg" />
        </header>
        <Ticket data={formData} />
      </>
    );
  }
}

export default App;
