import Cancel_button from "../Components/Cancel_button";
import Create_account_button from "../Components/Create_accont_button";
import './Create_account.css';

function Create_account() {
  return (
    <div className="create-account-container">
      <h1>Create Account</h1>
      <form>
        <label>Username:</label>
        <input type="email" name="email" placeholder="example@email.com" />

        <label>Password:</label>
        <input type="password" name="password" placeholder="••••••••" />

        <label>Telefone:</label>
        <div className="phone-input-group">
          <select name="countryCode" defaultValue="+55">
            <option value="+1">🇺🇸 +1 (USA)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
            <option value="+33">🇫🇷 +33 (FR)</option>
            <option value="+49">🇩🇪 +49 (DE)</option>
            <option value="+55">🇧🇷 +55 (BR)</option>
            <option value="+81">🇯🇵 +81 (JP)</option>
            <option value="+86">🇨🇳 +86 (CN)</option>
          </select>
          <input type="text" name="telefone" placeholder="(00) 00000-0000" />
        </div>

        <div className="button-group">
          <Create_account_button />
          <Cancel_button />
        </div>
      </form>
    </div>
  );
}

export default Create_account;
