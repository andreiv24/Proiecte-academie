import CrossIcon from "./CrossIcon";
import TickIcon from "./TickIcon";
import MailIcon from "./MailIcon";
import UmbrellaIcon from "./UmbrellaIcon";

const Icon = (props) => {
  if (props.type === "tick") return <TickIcon props={props.props} />;
  if (props.type === "cross") return <CrossIcon props={props.props} />;
  if (props.type === "mail") return <MailIcon props={props.props} />;
  if (props.type === "umbrella") return <UmbrellaIcon props={props.props} />;
  return <TickIcon props={props.props} />;
};

export default Icon;
