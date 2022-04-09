import React, { useEffect, useState } from "react";
import { InitSwAuth } from "@skill-wallet/auth";

const App = () => {
  const [locked, setLocked] = useState();

  const checkout = () => {
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal();
  };

  useEffect(() => {
    InitSwAuth();
  }, []);

  useEffect(() => {
    setLocked(window.unlockProtocol.getState());
  }, []);

  return (
    <div>
      {/* <sw-auth
        partner-key="9a916a3443179cf183be272e596a64392a6f55ea"
        use-dev="true"
      ></sw-auth> */}
      <header>
        {locked === "locked" && (
          <div onClick={checkout} style={{ cursor: "pointer" }}>
            Unlock me!{" "}
            <span aria-label="locked" role="img">
              🔒
            </span>
          </div>
        )}
        {locked === "unlocked" && (
          <div>
            Unlocked!{" "}
            <span aria-label="unlocked" role="img">
              🗝
            </span>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
