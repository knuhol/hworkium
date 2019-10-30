import React from 'react';
import { Badge } from 'react-bootstrap';

interface TaskItemProps {
  description: string;
  difficulty: number;
}

const MAX_DIFFICULTY = 6;

const TaskItem: React.FC<TaskItemProps> = ({ description, difficulty }: TaskItemProps) => {
  const quotient = Math.floor(MAX_DIFFICULTY / 3);
  const remainder = MAX_DIFFICULTY % 3;

  let variant: 'success' | 'warning' | 'danger';
  if (difficulty <= quotient) {
    variant = 'success';
  } else if (difficulty <= quotient * 2 + remainder) {
    variant = 'warning';
  } else {
    variant = 'danger';
  }

  return (
    <>
      {description} <Badge variant={variant}>{difficulty}</Badge>
    </>
  );
};

export default TaskItem;
export { MAX_DIFFICULTY };
