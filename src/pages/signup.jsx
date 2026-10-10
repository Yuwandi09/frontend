export default function Signup(){
  return(
    <div className="signup">
      <h1>Signup</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}