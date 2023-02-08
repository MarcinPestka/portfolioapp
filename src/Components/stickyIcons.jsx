import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon, Menu } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import pdf from "../Resources/Pestka_Marcin_CV.pdf";

export default function StickyIcons() {
  return (
    <div id="custom-sticky">
      <List>
        <List.Item>
        <Menu.Item
        href="https://github.com/MarcinPestka"
        position="right"
        target="_blank"
        id="item-href"
        >
        <Icon name="github" size='large'/>
        </Menu.Item>
        </List.Item>
        <List.Item>
        <Menu.Item
        href="https://linkedin.com/in/MarcinPestka"
        position="right"
        target="_blank"
        id="item-href"
        >
          <Icon name="linkedin" size='large'></Icon>
        </Menu.Item>
        </List.Item>
        <List.Item>
        <Menu.Item
        href={pdf}
        position="right"
        target="_blank"
        id="item-href"
        >
          <Icon name="vcard" size='large'></Icon>
        </Menu.Item>
        </List.Item>
      </List>
    </div>

  );
}
