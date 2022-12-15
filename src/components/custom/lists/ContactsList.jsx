import List from 'components/common/lists/List';

import { CONTACT_INFO } from 'utils/constants/linksCfg';

function ContactsList(props) {
  const { listItemClassName } = props;

  return (
    <List
      ListType='ul'
      listClassName='list-unstyled'
      listItemClassName={listItemClassName}
      itemsConfigs={CONTACT_INFO}
    >
      {({ iconClassName, content }) => (
        <>
          <i className={`bi ${iconClassName} me-2`}></i>
          {content}
        </>
      )}
    </List>
  );
}

export default ContactsList;
