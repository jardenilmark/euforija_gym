import React from 'react'
import { Label } from 'semantic-ui-react'
import { LogGrid, LogsRow, LogTrainerCol, LogsContainer, TrainerSegment } from './AttendanceStyled'

const Logs = () => (
  <LogGrid>
    <LogsRow>
      <LogTrainerCol width='8'>
        <TrainerSegment>
          <Label as='a' color='green' ribbon>
            I COULD TRAIN YOU
          </Label>
        </TrainerSegment>
      </LogTrainerCol>
      <LogTrainerCol width='8'>
        <TrainerSegment>
          <Label as='a' color='red' ribbon>
            I'M NOT HERE
          </Label>
        </TrainerSegment>
      </LogTrainerCol>
    </LogsRow>
    <LogsRow>
      <LogsContainer>
        <Label attached='top'
          style={{
            backgroundColor: '#CAACE0',
            textAlign: 'center',
            fontSize: '12pt',
            color: '#140520'
          }}
        >
          WHO VISITED TODAY?
        </Label>
      </LogsContainer>
    </LogsRow>
  </LogGrid>
)

export default Logs
