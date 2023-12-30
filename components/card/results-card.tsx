import React, { FC } from 'react';
import { Card, CardContent } from '../ui/card';

interface ResultsCardProps {
  data: any;
}

export const ResultsCard: FC<ResultsCardProps> = ({ data }) => {
  return (
    <div>
      <Card>
        <CardContent>{data?.login}</CardContent>
      </Card>
    </div>
  );
};
