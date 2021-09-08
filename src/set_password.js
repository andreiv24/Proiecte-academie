import './set_password.css';
import InputSP from './components/input_sp';
import SaveButtonSP from './components/save_button_sp';
import CancelButtonSP from './components/cancel_button_sp';
import SvgCloseButton from './components/svg_close_button';

function SetPassword() {
  return (
    <div className="set_password">
      <header>
        SET PASSWORD
        <SvgCloseButton/>
      </header>
      <InputSP text="New Password" placeholder="New Password"/>
      <InputSP text="Confirm Password" placeholder="Confirm Password"/>
      <div className="buttons_sp">
        <SaveButtonSP/>
        <CancelButtonSP/>
      </div>
    </div>
  );
}

export default SetPassword;
