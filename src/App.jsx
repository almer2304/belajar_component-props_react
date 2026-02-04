import igIcon from './assets/instagram.png';
import homeIcon from './assets/home.png';
import playIcon from './assets/play.png';
import messageIcon from './assets/send.png';
import searchIcon from './assets/search-interface-symbol.png';
import compassIcon from './assets/compass-circular-tool.png';
import likeIcon from './assets/heart.png';
import createIcon from './assets/plus.png';
import profileIcon from './assets/user.png';
import burgerIcon from './assets/menu.png';

function App() {
  return (
      <Body />
      
  )
}

function Body() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
      <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
        <Sidebar icon={igIcon}/>
        <Sidebar icon={homeIcon} label="Home"/>
        <Sidebar icon={playIcon} label="Reels"/>
        <Sidebar icon={messageIcon} label="Messages"/>
        <Sidebar icon={searchIcon} label="Search"/>
        <Sidebar icon={compassIcon} label="Explore"/>
        <Sidebar icon={likeIcon} label="Notification"/>
        <Sidebar icon={createIcon} label="Create"/>
        <Sidebar icon={profileIcon} label="Profile"/>
        <Sidebar icon={burgerIcon} label="More"/>
      </div>
      <div style={{flex:1}}>
        <Stories />
        <Feeds />
      </div>
      <div style={{width:300, marginRight: 100}}>
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
    <div style={{display: 'flex', flexDirection:'row'}}>
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

function Sidebar(props) {
  return( 
    <div style={{display:'flex'}}>
      <div style={{display:'flex', justifyContent:'start', marginTop:50}}>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <img src = {props.icon} style={{width: 30, height: 30}}/>
          <label style={{fontSize: 25, marginLeft: 10}}>{props.label}</label>
        </div>
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
        position: 'relative',
      }}
    >
      {/* <span>Contoh Story</span> */}
    </div>
  );
}

export default App;
