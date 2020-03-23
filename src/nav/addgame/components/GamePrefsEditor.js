// @flow

import React from 'react'
import type { GamePreferences, NewGamePreferences } from '../../../common/types/gamePreferences'
import { CheckBox, Body, Text, ListItem } from 'native-base'

type PropsType<P> = {|
  gamePrefs: P,
  onPrefsChange: (P) => void
|}

export default class GamePrefsEditor<P: NewGamePreferences | GamePreferences> extends React.Component<PropsType<P>> {
  switchNoAttestors = () => this.props.onPrefsChange({
    ...this.props.gamePrefs,
    noAttestors: (!this.props.gamePrefs.noAttestors: boolean)
  })

  switchDailyReassignment = () => this.props.onPrefsChange({
    ...this.props.gamePrefs,
    dailyReassignment: (!this.props.gamePrefs.dailyReassignment: boolean)
  })

  render () {
    const { noAttestors, dailyReassignment } = this.props.gamePrefs
    return <>
      <ListItem onPress={this.switchNoAttestors}>
        <CheckBox checked={!noAttestors} onPress={this.switchNoAttestors}/>
        <Body><Text>Allow attestors</Text></Body>
      </ListItem>
      <ListItem onPress={this.switchDailyReassignment}>
        <CheckBox checked={dailyReassignment} onPress={this.switchDailyReassignment}/>
        <Body><Text>Reassign victims daily</Text></Body>
      </ListItem>
    </>
  }
}
