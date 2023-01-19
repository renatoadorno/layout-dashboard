import { Container, Title, Sidebar, List, BtnMenu, Avatar, Contente } from './header.stitches';
import { useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { BsDashSquareDotted } from 'react-icons/bs';

export default function Header() {
  const [menuState, setMenuState] = useState(true);

  const changeMenu = () => {
    setMenuState(menuState ? false : true);
  };

  return (
    <Container>
      <BtnMenu onClick={ changeMenu }>
        {menuState ? <TbMenu2 /> : <CgClose /> }
      </BtnMenu>

      <Title>
        React
        <FaReact />
      </Title>

      <Contente>
        <Avatar className="IconButton" aria-label="Update dimensions">
          <p>CT</p>
        </Avatar>
      </Contente>

      <Sidebar variant={ menuState ? 'closed' : 'open' }>
        <List>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
          <li>
            <BsDashSquareDotted />
            <p>Dasboard</p>
          </li>
        </List>
      </Sidebar>
    </Container>
  );
}
