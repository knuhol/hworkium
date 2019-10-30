import { Button } from 'react-bootstrap';
import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface ApproveRemovalProps {
  onApproveRemovalClick: (event: SyntheticEvent) => void;
  onRejectRemovalClick: (event: SyntheticEvent) => void;
}

const ApproveRemoval: React.FC<ApproveRemovalProps> = ({
  onApproveRemovalClick,
  onRejectRemovalClick,
}: ApproveRemovalProps) => {
  const { t } = useTranslation();

  return (
    <>
      {t('global.really')}
      <Button variant="success" className="ml-2" size="sm" onClick={onApproveRemovalClick}>
        {t('global.yes')}
      </Button>
      <Button variant="danger" className="ml-2" size="sm" onClick={onRejectRemovalClick}>
        {t('global.no')}
      </Button>
    </>
  );
};

export default ApproveRemoval;
