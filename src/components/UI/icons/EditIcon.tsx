import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarker } from '@fortawesome/free-solid-svg-icons';

import { IconClickType } from '../../../types';

export const EditIcon: React.FC<IconClickType> = ({ onClick }) => (
  <FontAwesomeIcon
    icon={faMarker}
    size="lg"
    className="cursor-pointer h-8 mr-4"
    onClick={onClick}
  />
);
