import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./images.jpg" alt="download" className="logo"/>
<h2>Sign In to Twitter</h2>
<button>
  <img src="./google.jpg" alt="download" />
  Sign in with Google
</button>
<button>
  <img src="./apple.jpg" alt="download" />
  Sign in with Google
</button>
<hr></hr>
<span>Or</span>
<form>
  <input type="text" placeholder="Phone email or username"/>
  <button>Next</button>
</form>
<button>Forget Password</button>
<p>Don't Have account <a>Sign up</a></p>
      </div>
      
    </div>
  );
}

export default App;
