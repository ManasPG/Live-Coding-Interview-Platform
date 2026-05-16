import "./App.css";
import { SignInButton, SignOutButton, UserButton } from "@clerk/react";

function App() {
  return (
    <>
      <h1>Welcome</h1>

      <SignInButton mode="modal">Sign in</SignInButton>

      <UserButton />
    </>
  );
}

export default App;
