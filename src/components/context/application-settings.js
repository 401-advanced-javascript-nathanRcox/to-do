import React from 'react';

export const AppSettingsContext = React.createContext();

class AppSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxItems: 4,
      sortMethod: 'assignee',
      hideCompleted: true
    }
  }

  // setMaxItems = (max) => {
  //   this.setState({ maxItems });
  // }

    render() {
      return(
        <AppSettingsContext.Provider value={this.state}>
          {this.props.children}
        </AppSettingsContext.Provider>
      )
  }
}

export default AppSettings;
