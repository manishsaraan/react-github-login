import React from "react";
import axios from "axios";

class GitHubLogin extends React.Component {
  render() {
    console.log(this.props);
    const { clientID } = this.props;
    return (
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${clientID}`}
      >
        sdflkdsf
      </a>
    );
  }
}

export default GitHubLogin;
export { GitHubLogin };
