import React from "react";

interface ConditionalRenderI {
  loggedIn: boolean;
  username: string;
  changeLogStatus: () => void;
}

function ConditionalRenderComp({ props }: { props: ConditionalRenderI }) {
  if (props.loggedIn === false) {
    return <button onClick={props.changeLogStatus}>login</button>;
  } else {
    return (
      <button onClick={props.changeLogStatus}>
        {`${props.username} logout here`}
      </button>
    );
  }
}

export { ConditionalRenderComp };
