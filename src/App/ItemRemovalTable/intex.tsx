import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ApproveRemoval from './ApproveRemoval';

interface Item {
  id: string;
  name: string;
}

interface ItemRemovalTableProps {
  itemBodyHeadline: string;
  itemRemovalHeadline: string;
  items: Item[];
  displayItem: (item: Item) => React.ReactNode;
  removeItem: (id: string) => void;
}

const ItemRemovalTable: React.FC<ItemRemovalTableProps> = ({
  itemBodyHeadline,
  itemRemovalHeadline,
  items,
  displayItem,
  removeItem,
}: ItemRemovalTableProps) => {
  const [candidateToRemove, setCandidateToRemove] = useState('');
  const dispatch = useDispatch();

  const onRemoveItemClick = (id: string) => (): void => {
    setCandidateToRemove(id);
  };

  const onApproveItemRemovalClick = (id: string) => (): void => {
    dispatch(removeItem(id));
  };

  const onRejectItemRemovalClick = (): void => {
    setCandidateToRemove('');
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{itemBodyHeadline}</th>
          <th scope="col">{itemRemovalHeadline}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: Item, index: number) => (
          <tr key={item.id}>
            <th scope="row">{index + 1}</th>
            <td>{displayItem(item)}</td>
            <td>
              {candidateToRemove === item.id ? (
                <ApproveRemoval
                  onApproveRemovalClick={onApproveItemRemovalClick(item.id)}
                  onRejectRemovalClick={onRejectItemRemovalClick}
                />
              ) : (
                <Button size="sm" onClick={onRemoveItemClick(item.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemRemovalTable;
