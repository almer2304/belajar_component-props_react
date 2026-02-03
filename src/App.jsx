function App() {
  return <Body />;
}

function Body() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', width: 'full'}}>
      <div style={{display:'flex', justifyContent: 'start'}}>
        <Sidebar/>
      </div>
      <div >
        <Stories />
        <Feeds />
      </div>
      <div>
        <RightSidebar/>
        <RightSidebar/>
        <RightSidebar/>
        <RightSidebar/>
        <RightSidebar/>
      </div>
    </div>
  );
}

function Feeds() {
  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <div style={{flexDirection: 'column'}}>
        <Feed />
        <Feed />
      </div>
    </div>
  );
}

function Feed() {
  return(
    <div style={{backgroundColor: 'grey' ,width: 100, display:'flex', justifyContent: 'center', height: 550, width: 450, alignItems: 'center', marginTop: 50}}>
      <span>contoh feeds</span>
    </div>
  );
}  

function RightSidebar(){
  return(
    <div style={{display: 'flex', flexDirection:'row', marginLeft:75}}>
      <div style={{backgroundColor:'grey', width:75, height: 75,borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', marginTop: 30}}>
        <h6>contoh profile</h6>
      </div>
      <div style={{marginTop:50, marginLeft:10}}>
        <span>Muhammad almer riwanto</span>
        <br />
        <span>Amee2304</span>
      </div>
    </div>
    

  );
}

function Sidebar() {
  return( 
    <div style={{display:'flex', marginLeft: 10}}>
      <div style={{display:'flex', justifyContent:'start'}}>
        <span>beranda</span>
      </div>
    </div>
  );
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
        margin: 10,
        display: 'inline',
      }}
    >
      {/* <span>Contoh Story</span> */}
    </div>
  );
}

export default App;
