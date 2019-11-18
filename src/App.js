import React from 'react';
import Button from "./Button/Button";

function App() {
  function callback(){
    alert("callback");
  }
  return (
    <>
      <Button size="large" color="default" status="active" action={callback}>Large</Button>
      <Button size="medium" color="default" status="active" action={callback}>Medium</Button>
      <Button size="small" color="default" status="active" action={callback}>Small</Button>
      <br/>
      <Button size="medium" color="default" status="active" action={callback}>Default</Button>
      <Button size="medium" color="success" status="active" action={callback}>Success</Button>
      <Button size="medium" color="warning" status="active" action={callback}>Warning</Button>
      <Button size="medium" color="error" status="active" action={callback}>Error</Button>
      <br/>
      <Button size="medium" color="default" status="disabled" action={callback}>Disabled</Button>
      <Button size="medium" color="default" status="active" action={callback}>Active</Button>
      <Button size="medium" color="default" status="loading" action={callback}>Loading</Button>
      <br/>
      <Button link="https://www.google.com/">Link to Google</Button>
    </>
  );
}

export default App;
