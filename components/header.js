import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

export default () => {
  return (
    <Menu style = {{
        marginTop:'10px'
      }}>
       <Menu.Item>
         CrowdCoin
       </Menu.Item>

       <Menu.Menu position='right'>
         <Menu.Item>
           Campaigns
         </Menu.Item>

         <Menu.Item >
           <Button animated='fade' primary>
             <Button.Content visible>+</Button.Content>
              <Button.Content hidden>
                <Icon name='add circle' />
              </Button.Content>
            </Button>
         </Menu.Item>
       </Menu.Menu>
     </Menu>
  );
}
