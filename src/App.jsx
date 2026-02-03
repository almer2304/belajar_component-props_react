function App() {
  return <Body />;
}

function Body() {
  return (
    <>
      <Stories />
      <Feeds />
    </>
  );
}

function Feeds() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Feed />
    </div>
  );
}

function Feed() {
  return(
    <div style={{backgroundColor: 'grey' ,width: 100, display:'flex', justifyContent: 'center', height: 550, width: 450, alignItems: 'center', marginTop: 50}}>
      <span>Hallo</span>
    </div>
  );

}  

function Sidebar() {
  return <></>;
}

function Stories() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
}

function Story() {
  return (
    <div
      style={{
        borderRadius: 100,
        backgroundColor: 'grey',
        width: 1,
        border: 'solid purple',
        padding: 50,
        margin: 5,
        display: 'inline',
      }}
    >
      {/* <span>Contoh Story</span> */}
    </div>
  );
}

export default App;
