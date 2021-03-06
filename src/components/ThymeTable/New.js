// @flow

import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { loadTemporaryItem } from '../../core/localStorage';

import { addTime } from '../../actions/time';

import Entry from './Entry';

type NewType = {
  onEntryCreate: (entry: timePropertyType) => void,
  onAddNewProject: (project: string) => string,
};

function New({ onEntryCreate, onAddNewProject }: NewType) {
  return (
    <Entry
      tempEntry={loadTemporaryItem()}
      onAdd={onEntryCreate}
      onAddNewProject={onAddNewProject}
    />
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onEntryCreate(entry: timePropertyType) {
      dispatch(addTime({
        ...entry,
        id: shortid.generate(),
      }));
    },
  };
}

export default connect(null, mapDispatchToProps)(New);
