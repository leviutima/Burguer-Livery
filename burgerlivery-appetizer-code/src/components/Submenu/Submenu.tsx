import { Link, useNavigate } from "react-router-dom";
import { SubmenuElement } from "./Submenu.style";

export const Submenu = ({ menuItems }) => {
  // const navigate = useNavigate();

  return (
    <SubmenuElement>
      <ul>
        {menuItems.map(({ text, id, url }) => (
          <li key={id}>
            <Link to={url}>{text}</Link>
          </li>
        ))}
      </ul>
    </SubmenuElement>
  );
};
